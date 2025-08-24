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

    // Naya background worker banana
    const deobfuscateWorker = new Worker('worker.js');

    // "Deobfuscate" button ka click event
    deobfuscateBtn.addEventListener('click', () => {
        const obfuscatedCode = inputCode.value;
        if (!obfuscatedCode.trim()) {
            outputCode.value = "// Please paste your obfuscated code first.";
            return;
        }

        outputCode.value = "⏳ Connecting to Google AI... Please wait, this may take a moment.";
        deobfuscateBtn.disabled = true;
        deobfuscateBtn.style.cursor = 'wait';

        // Code ko background worker ke paas bhejna
        deobfuscateWorker.postMessage({
            code: obfuscatedCode,
            useAI: deepScanCheckbox.checked // Checkbox ab AI ko enable/disable karega
        });
    });

    // Background worker se jawab wasool karna
    deobfuscateWorker.onmessage = (event) => {
        const data = event.data;

        if (data.status === 'processing') {
            outputCode.value = `⏳ ${data.message}`;
        } else if (data.status === 'success') {
            outputCode.value = data.result;
            deobfuscateBtn.disabled = false;
            deobfuscateBtn.style.cursor = 'pointer';

        } else if (data.status === 'error') {
            outputCode.value = `❌ Error from AI Engine:\n\n${data.error}`;
            deobfuscateBtn.disabled = false;
            deobfuscateBtn.style.cursor = 'pointer';
        }
    };

    // --- Utility Buttons ---
    copyBtn.addEventListener('click', () => { if (outputCode.value) { outputCode.select(); document.execCommand('copy'); } });
    uploadBtn.addEventListener('click', () => { fileInput.click(); });
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => { inputCode.value = e.target.result; };
            reader.readAsText(file);
        }
    });
    downloadBtn.addEventListener('click', () => {
        const textToSave = outputCode.value;
        if (!textToSave || textToSave.startsWith("//") || textToSave.startsWith("⏳") || textToSave.startsWith("❌")) { alert("No valid code to download."); return; }
        const blob = new Blob([textToSave], { type: 'application/javascript' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'qadeer-ai-deobfuscated.js';
        link.click();
        URL.revokeObjectURL(link.href);
    });
});
