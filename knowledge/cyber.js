 // cyber.js
// 1-200 Roman-Urdu keywords & responses (educational, non-actionable)

export const cyber = [
  { keywords: ['salam','hello','khush aamdeed'], response: "Welcome! Cyber knowledge base shuru." },

  // 1
  { keywords: ['eithikal hacking','eithikal hakking','akhlaki hacking'], response: "Eithikal hacking woh amal hai jo ijazat ke sath systems ki security behtar banane ke liye kiya jata hai." },

  // 2
  { keywords: ['bela qanuni hacking','bela qanuni hakking','black hat'], response: "Bela qanuni hacking gair qanooni hai aur nuqsan pohncha sakti hai; yeh jurm hai." },

  // 3
  { keywords: ['grey hat','grey hat hakker','grey hat hacking'], response: "Grey hat aksar bemarizi ya admi niji tor par kam karta hai; aam tor par legal nahin mana jata." },

  // 4
  { keywords: ['sailan security','cyber security','it security'], response: "Cyber security ka maqsad data aur systems ko mehfooz rakhna hai." },

  // 5
  { keywords: ['osint','open source maloomat','khuli manabe'], response: "OSINT se public sources se maloomat ikathi ki jati hain; hamesha qanooni aur akhlaqi hudood mein." },

  // 6
  { keywords: ['phishing','fishing','farib dahi'], response: "Phishing aik farib hai jisme logon se maloomat hasal ki jati hai; links check karain." },

  // 7
  { keywords: ['malware','bad software','nuksan deh software'], response: "Malware yani virus, trojan, ransomware waghera system ko nuksan pohanchate hain." },

  // 8
  { keywords: ['ransomware','ransam ware','data band karna'], response: "Ransomware data encrypt kar ke ransam mangta hai; backups zaroori hain." },

  // 9
  { keywords: ['firewall','aag ki deewar','traffic filter'], response: "Firewall network traffic ko filter karta hai taake nuqsan deh traffic na guzaray." },

  // 10
  { keywords: ['vpn','virtual private network','mehfooz rabta'], response: "VPN aapka internet traffic encrypt karta hai aur privacy barhata hai." },

  // 11
  { keywords: ['encryption','incryption','cipher'], response: "Encryption data ko unreadable banata hai jab tak key na ho." },

  // 12
  { keywords: ['symmetric encryption','mosawi encryption'], response: "Symmetric encryption me aik hi key encryption aur decryption ke liye hoti hai." },

  // 13
  { keywords: ['asymmetric encryption','ghair mosawi encryption','public private keys'], response: "Asymmetric me public aur private keys use hoti hain (RSA waghera)." },

  // 14
  { keywords: ['hashing','hash function','hash karna'], response: "Hashing se data ka fixed-length fingerprint banta hai jo one-way hota hai." },

  // 15
  { keywords: ['salting','salt lagana','password salt'], response: "Salt hashing process me extra data jorna hai taake rainbow attacks mushkil ho jayen." },

  // 16
  { keywords: ['bcrypt','argon2','secure hashing'], response: "Bcrypt/Argon2 strong password hashing algorithms hain." },

  // 17
  { keywords: ['password policy','pawsword policy','strong password'], response: "Strong passwords, unique aur lambi hone chahiyen; password manager istemal karen." },

  // 18
  { keywords: ['password manager','paswrd manager','bitwarden'], response: "Password manager passwords ko securely store karta hai aur unique passwords generate karta hai." },

  // 19
  { keywords: ['multi factor authentication','mfa','2fa'], response: "MFA/2FA passwords se aage aik extra layer deta hai (code, token ya biometrics)." },

  // 20
  { keywords: ['biometrics','fingerprint login','face id'], response: "Biometrics se authentication hoti hai; privacy aur liveness checks important hain." },

  // 21
  { keywords: ['social engineering','insani dhokha','logon ko chalana'], response: "Social engineering insanon ko trap kar ke maloomat hasil karna hai; training se roka ja sakta hai." },

  // 22
  { keywords: ['pretexting','baiting','phishing simulation'], response: "Pretexting aur baiting social engineering ki qisamain hain; phishing simulations awareness barhate hain." },

  // 23
  { keywords: ['network security','network tahaffuz','net security'], response: "Network security me segmentation, firewalls aur monitoring shamil hote hain." },

  // 24
  { keywords: ['segmentation','network tafseel','microsegmentation'], response: "Segmentation attack surface kam karta hai aur lateral movement rokta hai." },

  // 25
  { keywords: ['ids','intrusion detection system','nigrani nizaam'], response: "IDS suspicious activity detect karta hai; IPS usko block bhi kar sakta hai." },

  // 26
  { keywords: ['ips','intrusion prevention system','rok tham nizaam'], response: "IPS real-time me malicious traffic ko block karta hai." },

  // 27
  { keywords: ['siem','security information event management','log management'], response: "SIEM logs ko correlate karta hai aur alerts nikalta hai." },

  // 28
  { keywords: ['soar','security orchestration automation response','automation'], response: "SOAR security processes ko automate karta hai taake tez response mile." },

  // 29
  { keywords: ['threat intelligence','khatar maloomat','cyber intel'], response: "Threat intel se aane wale khataron ki pehchan hoti hai aur defense behtar hota hai." },

  // 30
  { keywords: ['iocs','indicator of compromise','shawarat'], response: "IOC woh signs hote hain jo compromise ko zahir karte hain (IPs, hashes, domains)." },

  // 31
  { keywords: ['vulnerability','kamzori','vuln'], response: "Vulnerability woh kami hai jo attacker exploit kar sakta hai." },

  // 32
  { keywords: ['vulnerability assessment','kamzori ka tajzia','va'], response: "Vulnerability assessment automated scan se kamzori dhoondta hai; remediation zaruri." },

  // 33
  { keywords: ['penetration testing','pen testing','pentest'], response: "Pen test ek authorised simulated attack hai jo weaknesses identify karta hai." },

  // 34
  { keywords: ['red team','red team exercise','redteam'], response: "Red team actual attackers ki tarah test karti hai taake real weaknesses milen." },

  // 35
  { keywords: ['blue team','blue team defense','blueteam'], response: "Blue team monitoring, detection aur response pe kaam karti hai." },

  // 36
  { keywords: ['purple team','purple team collaboration','puprleteam'], response: "Purple team red aur blue teams ke darmiyan coordination barhata hai." },

  // 37
  { keywords: ['bug bounty','bug bounty program','bounty'], response: "Bug bounty programs researchers ko vulnerabilities report karne par inaam detay hain." },

  // 38
  { keywords: ['responsible disclosure','zimmedar afsha','coordinated disclosure'], response: "Responsible disclosure vendor ko time dene aur policy follow karne ka tariqa hai." },

  // 39
  { keywords: ['forensics','digital forensics','tahqiqat'], response: "Digital forensics me evidence collect aur analyse ki jati hai, chain-of-custody maintain karna zaruri." },

  // 40
  { keywords: ['incident response','incident management','jawabi amal'], response: "Incident response me detection, containment, eradication, recovery aur post-mortem shamil hain." },

  // 41
  { keywords: ['backup','data backup','rihayi naksha'], response: "Regular backup rakhain aur restore process ko test karain." },

  // 42
  { keywords: ['disaster recovery','biznis continuity plan','drc'], response: "Disaster recovery se business downtime kam hota hai aur data bacha rehta hai." },

  // 43
  { keywords: ['logs','audit logs','dastavez'], response: "Comprehensive logging se incidents trace karna mumkin hota hai." },

  // 44
  { keywords: ['log retention','logs ko rakhna','retention policy'], response: "Log retention policy decide karte hain ke logs kitni dair tak rakhne hain." },

  // 45
  { keywords: ['monitoring','nigrani','active monitoring'], response: "Continuous monitoring se suspicious patterns pehle se mil sakte hain." },

  // 46
  { keywords: ['threat hunting','mandari talash','active search'], response: "Threat hunting proactive detection hai jisme analysts anomalies dhoondte hain." },

  // 47
  { keywords: ['honeypot','jhootay nizaam','decoy system'], response: "Honeypot attackers ko attract karta hai taake unki tactics samjhi ja sakein." },

  // 48
  { keywords: ['sandboxing','alag mahal','code isolation'], response: "Sandbox risky code ko isolate karta hai taake system safe rahe." },

  // 49
  { keywords: ['application security','app security','software protection'], response: "Application security me secure coding, input validation aur dependency management shamil hain." },

  // 50
  { keywords: ['secure coding','mehfooz coding','safecode'], response: "Secure coding practices se vulnerabilities kam hoti hain (e.g., validate input, handle errors safely)." },

  // 51
  { keywords: ['owasp','owasp top 10','owasp top10'], response: "OWASP Top 10 web application risks ki list hai (SQLi, XSS, etc.)." },

  // 52
  { keywords: ['sql injection','sqli','database injection'], response: "SQLi input sanitization aur parameterized queries se roki ja sakti hai." },

  // 53
  { keywords: ['xss','cross site scripting','xss attack'], response: "XSS se malicious scripts users ke browser me chalaye jate hain; output encoding se bachao." },

  // 54
  { keywords: ['csrf','cross site request forgery','csrf token'], response: "CSRF attacks anti-CSRF tokens se roke ja sakte hain." },

  // 55
  { keywords: ['security headers','csp','hsts'], response: "Security headers jaise CSP, HSTS, X-Frame-Options browser protections deti hain." },

  // 56
  { keywords: ['session management','session hijacking','cookies'], response: "Secure cookies, HttpOnly aur proper session expiry se session hijacking kam hota hai." },

  // 57
  { keywords: ['authentication','tochiq','auth'], response: "Authentication user identity verify karta hai; strong methods use karain." },

  // 58
  { keywords: ['authorization','ijazat','authz'], response: "Authorization determine karti hai ke user ko kya access hai (RBAC, ABAC)." },

  // 59
  { keywords: ['oauth','saml','jwt'], response: "OAuth, SAML aur JWT modern auth/protocols hain; unko sahi tor pe configure karna chahiye." },

  // 60
  { keywords: ['api security','api tahaffuz','api'], response: "API security me rate limiting, auth, input validation aur logging zaruri hain." },

  // 61
  { keywords: ['rate limiting','throttling','api control'], response: "Rate limiting brute force aur abuse se bachata hai." },

  // 62
  { keywords: ['secrets management','secret storage','keys'], response: "Secrets ko secure store karein (vaults/HSM), kabhi code me seed na karein." },

  // 63
  { keywords: ['hsm','hardware security module','hsm use'], response: "HSM keys ko secure hardware me store karta hai." },

  // 64
  { keywords: ['key rotation','key rotate','crypto hygiene'], response: "Encryption keys ko regular rotate karna best practice hai." },

  // 65
  { keywords: ['certificate management','ssl cert','tls cert'], response: "Certificates ko manage aur renew karna aur unko secure rakhna zaruri hai." },

  // 66
  { keywords: ['https enforcement','ssl only','force https'], response: "HTTPS enforce karne se data transit me mehfooz rehta hai." },

  // 67
  { keywords: ['network scanning','vulnerability scan','scan tools'], response: "Scanning se potential issues maloom hote hain; scanning authorised hone chahiye." },

  // 68
  { keywords: ['nmap','port scanning','nmap info'], response: "Nmap network mapping tool hai; educational use mein network discovery ke liye." },

  // 69
  { keywords: ['whois','domain info','whois lookup'], response: "Whois se domain registration maloom hoti hai; OSINT me istamal." },

  // 70
  { keywords: ['dns','domain name system','dns basics'], response: "DNS domain names ko IP addresses se map karta hai; DNS security important hai." },

  // 71
  { keywords: ['dnssec','dns security','dns spoofing'], response: "DNSSEC DNS spoofing se bachata hai." },

  // 72
  { keywords: ['dhcp','ip lease','network config'], response: "DHCP dynamic IP assignment manage karta hai." },

  // 73
  { keywords: ['arp spoofing','arp poisoning','man in lan'], response: "ARP spoofing se local network me traffic intercept ho sakta hai; detection zaruri." },

  // 74
  { keywords: ['mitm','man in the middle','mitm attack'], response: "MITM attack me attacker beech me data intercept karta hai; TLS se bachao hota hai." },

  // 75
  { keywords: ['wifi security','wpa2','wpa3'], response: "WiFi ke liye WPA2/WPA3 aur strong passphrase use karain." },

  // 76
  { keywords: ['mac filtering','wireless control','wifi best practices'], response: "MAC filtering additional control hai lekin spoofing possible hai." },

  // 77
  { keywords: ['physical security','device security','hardware protection'], response: "Physical access control (locks, BIOS passwords) bhi security ka hissa hai." },

  // 78
  { keywords: ['bios uefi security','secure boot','boot security'], response: "Secure Boot ensure karta hai ke trusted OS hi load ho." },

  // 79
  { keywords: ['disk encryption','full disk encryption','fde'], response: "FDE se device chori honay par data safe rehta hai (BitLocker, LUKS)." },

  // 80
  { keywords: ['mobile device management','mdm','mobile control'], response: "MDM se mobile devices manage aur secure kie jate hain." },

  // 81
  { keywords: ['app sandbox','mobile sandboxing','app isolation'], response: "Apps ko sandbox karna unhain isolate karta hai." },

  // 82
  { keywords: ['secure storage','encrypted storage','keystore'], response: "Mobile apps ko sensitive data encrypted storage me rakhna chahiye." },

  // 83
  { keywords: ['android permissions','permission model','android sec'], response: "Android me permissions control kar ke data exposure roka jata hai." },

  // 84
  { keywords: ['ios security','apple security','ios privacy'], response: "iOS me sandboxing aur app review security badhati hai." },

  // 85
  { keywords: ['container security','docker security','kubernetes security'], response: "Containers ke liye minimal images, scanning aur runtime policies zaruri hain." },

  // 86
  { keywords: ['image scanning','container scan','vuln scan'], response: "Container images ko scan karna vulnerabilities detect karta hai." },

  // 87
  { keywords: ['orchestration security','k8s sec','kubernetes hardening'], response: "Kubernetes me RBAC, network policies aur secrets management zaruri hai." },

  // 88
  { keywords: ['ci cd security','pipeline security','devops sec'], response: "CI/CD pipeline me secret handling, artifact signing aur scanning shamil honi chahiye." },

  // 89
  { keywords: ['infrastructure as code security','iac sec','terraform sec'], response: "IaC files ko scan aur review karain taake misconfig avoid hon." },

  // 90
  { keywords: ['cloud shared responsibility','cloud roles','cloud security model'], response: "Cloud providers aur customers ka role mukhtalif hota hai; shared responsibility ko samjhen." },

  // 91
  { keywords: ['iam','identity access management','user roles'], response: "IAM se who can do what control hota hai; least privilege apply karain." },

  // 92
  { keywords: ['rbac','role based access control','roles'], response: "RBAC roles de ke access control enforce karta hai." },

  // 93
  { keywords: ['mfa enforcement','force 2fa','enforce mfa'], response: "Sensitive accounts pe MFA enforce karna security ko barhata hai." },

  // 94
  { keywords: ['privilege escalation','local privilege escalation','lpe'], response: "Privilege escalation weaknesses se attackers higher rights hasil karte hain; patching zaruri." },

  // 95
  { keywords: ['least privilege','minimum access','access policy'], response: "Least privilege principle se unnecessary access remove hota hai." },

  // 96
  { keywords: ['separation of duties','sod','duties control'], response: "SOD conflicts ko kam karta hai aur fraud risk kam hota hai." },

  // 97
  { keywords: ['audit trails','auditing','compliance logs'], response: "Audit trails investigations me madad dete hain." },

  // 98
  { keywords: ['compliance','qanooni mutabiqat','regulation'], response: "Compliance rules jaise GDPR/CCPA/P PCI DSS follow karna zaruri hai." },

  // 99
  { keywords: ['gdpr','data privacy law','eu privacy'], response: "GDPR users ke data rights protect karta hai; organizations ko obligations hain." },

  // 100
  { keywords: ['ccpa','california privacy','us privacy law'], response: "CCPA California residents ko kuch data rights deta hai." },

  // 101
  { keywords: ['hipaa','health data law','medical privacy'], response: "HIPAA health data ki security aur privacy regulate karta hai (US context)." },

  // 102
  { keywords: ['pci dss','payment card security','cards compliance'], response: "PCI DSS cardholder data protection ke liye standards deta hai." },

  // 103
  { keywords: ['security policy','safety rules','policy doc'], response: "Security policies organizational expectations aur procedures define karte hain." },

  // 104
  { keywords: ['acceptable use policy','aup','istimal policy'], response: "AUP specify karta hai ke systems kaise use honge aur kis tarah mana hai." },

  // 105
  { keywords: ['change management','change control','tabdeeli nizaam'], response: "Change management changes ko track aur approve karne ke liye process provide karta hai." },

  // 106
  { keywords: ['incident playbook','playbook','response guide'], response: "Playbooks incident types ke liye step-by-step guidance provide karte hain." },

  // 107
  { keywords: ['tabletop exercise','drill','practice incident'], response: "Tabletop exercises teams ko incident scenarios practice karne deti hain." },

  // 108
  { keywords: ['user awareness training','security training','employee training'], response: "Regular user training phishing aur best practices se security improve karta hai." },

  // 109
  { keywords: ['phishing simulation','fake phishing test','train via simulation'], response: "Phishing simulations employees ko real-like tests se train karte hain." },

  // 110
  { keywords: ['insider threat','employee misuse','andaruni khatra'], response: "Insider threats monitoring aur controls se detect aur mitigate kiye jate hain." },

  // 111
  { keywords: ['data loss prevention','dlp','data leakage prevention'], response: "DLP policies sensitive data ke bahar jane se rokne ke liye lagayi jati hain." },

  // 112
  { keywords: ['endpoint security','endpoint protection','antivirus'], response: "Endpoint security devices aur workstations ko threats se protect karta hai." },

  // 113
  { keywords: ['edr','endpoint detection response','edr tool'], response: "EDR realtime telemetry collect karke advanced detection aur response enable karta hai." },

  // 114
  { keywords: ['mobile security policy','mobile policy','mdm rules'], response: "Mobile policies data protection aur device configuration govern karti hain." },

  // 115
  { keywords: ['remote work security','work from home security','wfh sec'], response: "Remote work security me VPN, device management aur secure configurations zaruri hote hain." },

  // 116
  { keywords: ['secure remote access','ztn','zero trust network access'], response: "ZTNA aur VPN secure remote access ke modern tareeqay hain." },

  // 117
  { keywords: ['zero trust architecture','zero trust','never trust always verify'], response: "Zero Trust model me har request continuous verification require karta hai." },

  // 118
  { keywords: ['supply chain security','vendor risk','third party risk'], response: "Supply chain security vendors ki security check karte hue third-party risks manage karta hai." },

  // 119
  { keywords: ['software bill of materials','sbom','software component list'], response: "SBOM ek inventory hoti hai jo software components track karti hai." },

  // 120
  { keywords: ['dependency scanning','dependency check','vuln deps'], response: "Dependencies scan karna supply chain vulnerabilities se bachata hai." },

  // 121
  { keywords: ['secure default','secure by default','default settings'], response: "Products ko secure defaults ke sath aana chahiye, na ke insecure defaults." },

  // 122
  { keywords: ['hardening','system hardening','secure config'], response: "Hardening me unnecessary services disable aur secure baselines apply hoti hain." },

  // 123
  { keywords: ['configuration management','config drift','cm'], response: "Configuration management drift ko rokta hai aur uniformity ensure karta hai." },

  // 124
  { keywords: ['immutable infrastructure','immutable systems','infra idea'], response: "Immutable infrastructure me servers replace kiye jate hain na ke modify, jo consistency deti hai." },

  // 125
  { keywords: ['observability','monitoring metrics','tracing logs'], response: "Observability metrics, logs aur traces combine karke system behavior samjhata hai." },

  // 126
  { keywords: ['sre practices','site reliability engineering','sre'], response: "SRE reliability aur monitoring practices se production stability barhate hain." },

  // 127
  { keywords: ['chaos engineering','resilience testing','chaos'], response: "Chaos engineering planned fault injection se resilience test karta hai." },

  // 128
  { keywords: ['business impact analysis','bia','impact study'], response: "BIA systems aur processes ka business value assess karta hai taake recovery priorities set hon." },

  // 129
  { keywords: ['maturity model','cmm','security maturity'], response: "Maturity models organization ke security program ko measure karte hain." },

  // 130
  { keywords: ['security roadmap','sec road map','plan'], response: "Security roadmap long-term initiatives aur improvements define karta hai." },

  // 131
  { keywords: ['security budget','funding','resourcing'], response: "Adequate budgeting se security tools aur staff sustain hote hain." },

  // 132
  { keywords: ['vendor management','vendor assessment','third party'], response: "Vendors ko assess karna aur SLAs contracts me security clauses rakhna important hai." },

  // 133
  { keywords: ['procurement security','secure supply','buy safe'], response: "Procurement processes me security requirements include karain." },

  // 134
  { keywords: ['secure architecture','security design','architectural patterns'], response: "Secure architecture me layered defenses aur least privilege shamil hoti hai." },

  // 135
  { keywords: ['microservices security','ms sec','service to service auth'], response: "Microservices me service-to-service auth, mTLS aur network policies istimal hon." },

  // 136
  { keywords: ['service mesh security','istio sec','linkerd sec'], response: "Service mesh communication, mTLS aur policy enforcement asan karta hai." },

  // 137
  { keywords: ['observability security','telemetry security','logs privacy'], response: "Telemetry data me sensitive info nahi honi chahiye; privacy maintain karain." },

  // 138
  { keywords: ['data minimization','less data','collect kam data'], response: "Data minimization se exposure aur compliance risks kam hote hain." },

  // 139
  { keywords: ['data classification policy','classify data','sensitivity'], response: "Data classification se protection level aur handling rules set hote hain." },

  // 140
  { keywords: ['data masking','tokenization','pseudonymization'], response: "Data masking aur tokenization se production data exposure kam hota hai." },

  // 141
  { keywords: ['encryption at rest','data at rest encryption','rest enc'], response: "Data at rest encryption storage me data ko safe rakhta hai." },

  // 142
  { keywords: ['encryption in transit','tls encryption','transit enc'], response: "Transport layer encryption jaise TLS network par data secure karte hain." },

  // 143
  { keywords: ['secure backups','encrypted backups','backup security'], response: "Backups ko encrypt aur offsite rakhain; restore drills karain." },

  // 144
  { keywords: ['retention policy','data retention','keep rules'], response: "Retention policy batati hai logs aur data kitni dair rakhne hain." },

  // 145
  { keywords: ['privacy by design','privacy integration','design principle'], response: "Privacy by design se systems initially hi private banaye jate hain." },

  // 146
  { keywords: ['consent management','user consent','consent record'], response: "User consent tracking aur revocation mechanisms maintain karain." },

  // 147
  { keywords: ['access reviews','periodic reviews','access recertification'], response: "Regular access reviews se stale access remove hota hai." },

  // 148
  { keywords: ['joiner leaver mover','jlm process','onboarding offboarding'], response: "Onboarding/offboarding processes ensure karte hain ke access timely add/remove ho." },

  // 149
  { keywords: ['privileged access management','pam','privileged accounts'], response: "PAM solutions privileged credentials ko secure aur monitor karte hain." },

  // 150
  { keywords: ['just in time access','jit','temporary access'], response: "JIT access temporary elevation deta hai taake long-lived privileges kam hon." },

  // 151
  { keywords: ['security scanning','automated scanning','vuln scanner'], response: "Automated scanners baseline vulnerabilities dhoondte hain; manual validation bhi zaruri." },

  // 152
  { keywords: ['manual code review','code audit','secure review'], response: "Manual code review complex logic issues identify karta hai jise scanners miss karte hain." },

  // 153
  { keywords: ['third party code','oss risk','open source risk'], response: "Open source components ko track aur update rakhain; license compliance check karain." },

  // 154
  { keywords: ['supply chain attacks','software supply chain','dependency attack'], response: "Supply chain attacks vendors ke through entry paate hain; SBOM aur scanning madadgar hain." },

  // 155
  { keywords: ['runtime protection','runtine app defense','rap'], response: "Runtime protections jaise WAF, RASP attack surface ko runtime pe protect karte hain." },

  // 156
  { keywords: ['web application firewall','waf','web firewall'], response: "WAF web traffic filter karke common web attacks rokta hai." },

  // 157
  { keywords: ['api gateway security','api gateway','rate limit'], response: "API gateways auth, rate limiting aur logging handle karte hain." },

  // 158
  { keywords: ['content security policy','csp header','csp'], response: "CSP browser ko batata hai ke scripts kahan se load hon, XSS risk kam hota hai." },

  // 159
  { keywords: ['sri','subresource integrity','sri hash'], response: "SRI remote scripts ke integrity check ke liye use hota hai." },

  // 160
  { keywords: ['http security headers','security headers','hsts xframe'], response: "Use HSTS, X-Frame-Options aur relevant headers for browser protections." },

  // 161
  { keywords: ['certificate pinning','cert pinning','pin tls'], response: "Certificate pinning se certain certificates hi accept honge, MITM risk kam." },

  // 162
  { keywords: ['oauth flows','authorization code flow','implicit flow'], response: "OAuth flows ko samajhna aur sahi flow choose karna necessary hai for secure auth." },

  // 163
  { keywords: ['sso','single sign on','single signon'], response: "SSO user experience behtar karta hai; implementation secure hona chahiye." },

  // 164
  { keywords: ['session fixation','session attacks','session sec'], response: "Session fixation se bachne ke liye session tokens rotate karein aur secure flags lagayen." },

  // 165
  { keywords: ['csrf cookie sameSite','samesite cookie','csrf defense'], response: "SameSite cookie attribute CSRF attacks se defense me madad kar sakta hai." },

  // 166
  { keywords: ['browser isolation','browser sandbox','secure browsing'], response: "Browser isolation risky content ko isolate karta hai taake host safe rahe." },

  // 167
  { keywords: ['email security protocols','spf dkim dmarc','email auth'], response: "SPF, DKIM, DMARC se email spoofing aur phishing kam hota hai." },

  // 168
  { keywords: ['secure dev lifecycle','sdlc security','secure sdlc'], response: "SDLC mein security shuru se implement karna vulnerabilities kam karta hai." },

  // 169
  { keywords: ['threat modeling frameworks','stride dread','threat model'], response: "STRIDE aur DREAD frameworks threats categorize aur assess karne me madad karte hain." },

  // 170
  { keywords: ['attack surface management','asm','attack surface'], response: "ASM se external attack surface ko continuously map aur monitor karte hain." },

  // 171
  { keywords: ['exposure management','external exposure','risk reduction'], response: "Exposure management external risks ko prioritize aur remediate karta hai." },

  // 172
  { keywords: ['vulnerability disclosure policy','vdp','disclosure policy'], response: "VDP clear guidance deti hai researchers ko vulnerabilities report karne ke liye." },

  // 173
  { keywords: ['law enforcement coordination','police reporting','report incident'], response: "Serious incidents me law enforcement se cooperation zaruri ho sakta hai." },

  // 174
  { keywords: ['cyber insurance policy','insurance cover','cyber claim'], response: "Cyber insurance financial impact mitigate karne me madad kar sakti hai, policies samjhen." },

  // 175
  { keywords: ['forensic readiness','evidence readiness','forensic plan'], response: "Forensic readiness ensure karna ke jab incident aaye to evidence preserve ho." },

  // 176
  { keywords: ['memory forensics','ram analysis','volatile data'], response: "Memory forensics RAM se volatile evidence collect karta hai; specialist process chahiye." },

  // 177
  { keywords: ['disk imaging','forensic image','disk clone'], response: "Disk imaging forensically sound copy banata hai jise analysis ke liye use karte hain." },

  // 178
  { keywords: ['timeline analysis','event timeline','forensic timeline'], response: "Timeline analysis incidents ki chronology samajhne me madad karta hai." },

  // 179
  { keywords: ['malware analysis','static dynamic analysis','malware research'], response: "Malware analysis static/dynamic techniques se sample behavior samjha jata hai (safe lab me)." },

  // 180
  { keywords: ['reverse engineering','binary analysis','decompilation'], response: "Reverse engineering legal sirf allowed environments me karein; copyright/terms ka khayal." },

  // 181
  { keywords: ['threat actor types','state sponsored','crimeware groups'], response: "Threat actors state-sponsored, organized crime, hacktivists vaghera ho sakte hain." },

  // 182
  { keywords: ['iattribution','attacker attribution','who did it'], response: "Attribution mushkil hai; proofs careful analyze karne chahiye." },

  // 183
  { keywords: ['malvertising','ad based attacks','ads threats'], response: "Malvertising ads ke through users ko malicious sites par redirect karta hai." },

  // 184
  { keywords: ['supply chain compromise','vendor compromise','third party breach'], response: "Third-party compromise se organizations exposed ho sakte hain; vendor risk management zaruri." },

  // 185
  { keywords: ['data breach notification','breach notice','notify users'], response: "Breach discovery ke baad legal obligations ke mutabiq users aur regulators notify karain." },

  // 186
  { keywords: ['security metrics','kpi','security measurement'], response: "Security metrics se program performance measure karte hain (MTTR, MTTD etc.)." },

  // 187
  { keywords: ['mttd','mean time to detect','detection time'], response: "MTTD average time detect karne ka measure hai." },

  // 188
  { keywords: ['mttr','mean time to recover','recovery time'], response: "MTTR average time to recover ka indicator hota hai." },

  // 189
  { keywords: ['mean time to respond','mttrsp','response speed'], response: "Response time kam karna security maturity ka part hai." },

  // 190
  { keywords: ['playbook automation','orchestration playbook','runbook'], response: "Playbooks automate repetitive response steps via SOAR." },

  // 191
  { keywords: ['red team reporting','adversary emulation report','pentest report'], response: "Reports clear remediation steps aur risk prioritization deni chahiye." },

  // 192
  { keywords: ['remediation tracking','fix tracking','vuln fix'], response: "Fix tracking ensure karta hai ke discovered issues resolve hon." },

  // 193
  { keywords: ['security champions','developer champions','sec champions'], response: "Security champions developers me security awareness aur ownership barhate hain." },

  // 194
  { keywords: ['privacy impact assessment','pia','privacy assessment'], response: "PIA new systems ke privacy impact ko evaluate karta hai." },

  // 195
  { keywords: ['devsecops tools','sast dast','security tools'], response: "SAST, DAST aur SCA jaise tools dev pipeline me integrate karain." },

  // 196
  { keywords: ['sast','static application security testing','code scan'], response: "SAST source code analyze karta hai for vulnerabilities." },

  // 197
  { keywords: ['dast','dynamic application security testing','runtime scan'], response: "DAST running application ko test karta hai for runtime vulnerabilities." },

  // 198
  { keywords: ['sca','software composition analysis','oss scan'], response: "SCA open-source components ko identify aur vulnerabilites dhoondta hai." },

  // 199
  { keywords: ['secure default credentials','change default password','default creds'], response: "Devices ke default credentials hamesha change karen; ye common attack vector hota hai." },

  // 200
  { keywords: ['legal boundaries','qanooni hadain','legal limits'], response: "Humesha yaad rakhen: bina ijazat kisi system ki testing ya access illeg
al hai — sirf ethical aur legal tareeqon se kaam karain." }
];