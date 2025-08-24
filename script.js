document.addEventListener('DOMContentLoaded', () => {

    // HTML elements ko select karna
    const inputCode = document.getElementById('inputCode');
    const outputCode = document.getElementById('outputCode');
    const deobfuscateBtn = document.getElementById('deobfuscateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const uploadBtn = document.getElementById('uploadBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const fileInput = document.getElementById('fileInput');
    const deepScanCheckbox = document.getElementById('deepScanCheckbox');

    // "Deobfuscate" button ka click event
    deobfuscateBtn.addEventListener('click', () => {
        const obfuscatedCode = inputCode.value;

        if (!obfuscatedCode.trim()) {
            outputCode.value = "// Please paste your obfuscated code first.";
            return;
        }

        outputCode.value = "// Thinking..."; // User ko batana ke process shuru ho gaya hai

        // Thora sa delay dena taake "Thinking..." message nazar aa sake
        setTimeout(() => {
            try {
                let processedCode = obfuscatedCode;

                // <<< YEH HAI NAYA "THINKING" WALA HISSA >>>
                if (deepScanCheckbox.checked) {
                    try {
                        // Babel.js ko istemal karke code ko samajhna aur aasaan banana
                        const transformed = Babel.transform(processedCode, {
                             presets: ["minify"], // Minify preset code ko simplify karta hai
                             sourceType: "script"
                        }).code;
                        processedCode = transformed;
                    } catch (babelError) {
                         // Agar Babel fail ho, to user ko batana
                        console.warn("Babel deep analysis failed:", babelError.message);
                        outputCode.value = `// Deep Analysis failed: ${babelError.message}\n\n// Switching to basic formatting...`;
                        // Basic formatting par switch kar jana
                    }
                }

                // JS Beautifier se final code ko saaf karna
                const beautifiedCode = js_beautify(processedCode, {
                    indent_size: 4,
                    space_in_empty_paren: true
                });
                
                outputCode.value = `// --- Deobfuscated by Qadeer --- \n\n${beautifiedCode}`;

            } catch (error) {
                // Agar koi bhi error aaye to message dikhana
                outputCode.value = `// An error occurred:\n// ${error.message}\n\n// Please ensure you have pasted valid JavaScript code.`;
            }
        }, 50); // 50ms ka delay
    });

    // "Copy" button ka event
    copyBtn.addEventListener('click', () => {
        if (outputCode.value) {
            outputCode.select();
            document.execCommand('copy');
        }
    });

    // "Upload File" button ka event
    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                inputCode.value = e.target.result;
            };
            reader.readAsText(file);
        }
    });

    // "Download File" button ka event
    downloadBtn.addEventListener('click', () => {
        const textToSave = outputCode.value;
        if (!textToSave || textToSave.startsWith("//")) {
             alert("No code to download.");
             return;
        }
        const blob = new Blob([textToSave], { type: 'application/javascript' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'qadeer-deobfuscated-script.js';
        link.click();
        URL.revokeObjectURL(link.href);
    });

});
