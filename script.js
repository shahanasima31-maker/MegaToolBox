// Helper function to copy text to clipboard
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    element.select();
    element.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

// 1. Password Generator
function generatePassword() {
    const length = document.getElementById('password-length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('generated-password').value = password;
}
// Initial password generation on load
window.onload = generatePassword;


// 2. Image Resizer (Client-side image resizing is complex and often uses Canvas API. This is a simplified placeholder.)
function resizeImage() {
    const fileInput = document.getElementById('image-upload');
    const width = document.getElementById('resize-width').value;
    const height = document.getElementById('resize-height').value;
    const status = document.getElementById('image-resize-status');

    if (!fileInput.files || fileInput.files.length === 0) {
        status.textContent = "Please upload an image first.";
        return;
    }
    if (!width || !height) {
        status.textContent = "Please enter both width and height.";
        return;
    }

    // This is a basic placeholder. Real image resizing requires Canvas API.
    status.textContent = `Attempting to resize image to ${width}x${height}px. (Advanced JS required)`;
    // Example: Using FileReader and Canvas (requires more code)
    // const reader = new FileReader();
    // reader.onload = function(event) {
    //     const img = new Image();
    //     img.onload = function() {
    //         const canvas = document.createElement('canvas');
    //         canvas.width = width;
    //         canvas.height = height;
    //         const ctx = canvas.getContext('2d');
    //         ctx.drawImage(img, 0, 0, width, height);
    //         // You can then display canvas.toDataURL() or download it.
    //         status.innerHTML = `Resized image preview: <img src="${canvas.toDataURL()}" width="${width}" height="${height}">`;
    //     };
    //     img.src = event.target.result;
    // };
    // reader.readAsDataURL(fileInput.files[0]);
}

// 3. SEO Analyzer (Requires server-side processing or external API, basic placeholder)
function analyzeSEO() {
    const url = document.getElementById('seo-url').value;
    const seoScore = document.getElementById('seo-score');
    const seoDetails = document.getElementById('seo-details');

    if (!url) {
        seoScore.textContent = "Please enter a URL.";
        seoDetails.textContent = "";
        return;
    }

    // Client-side JS can't directly "analyze" external URLs for SEO.
    // This would typically involve making a request to a backend server.
    seoScore.textContent = "Analyzing... (client-side simulation)";
    seoDetails.textContent = "This tool needs a backend to fetch and analyze external website data.";

    // Simulate a random score after a delay
    setTimeout(() => {
        const score = Math.floor(Math.random() * (100 - 40 + 1)) + 40; // Score between 40-100
        seoScore.textContent = `SEO Score: ${score}/100`;
        seoDetails.innerHTML = `
            <p><strong>Basic checks (simulated):</strong></p>
            <ul>
                <li>Meta Title presence: ${score > 50 ? 'Good' : 'Needs improvement'}</li>
                <li>Meta Description presence: ${score > 60 ? 'Good' : 'Needs improvement'}</li>
                <li>H1 Tag presence: ${score > 70 ? 'Good' : 'Needs improvement'}</li>
                <li>Content Length: ${score > 80 ? 'Good' : 'Needs improvement'}</li>
            </ul>
            <p>For a real SEO analysis, a server-side component or API is required.</p>
        `;
    }, 1500);
}

// 4. Promo Card Builder
function buildPromoCard() {
    const title = document.getElementById('promo-title').value;
    const description = document.getElementById('promo-description').value;

    document.getElementById('display-promo-title').textContent = title || "Your Title";
    document.getElementById('display-promo-description').textContent = description || "Your Description";
}
// Initial build on load
window.onload = buildPromoCard;

// 5. QR Code Generator (Uses qrious library)
function generateQRCode() {
    const text = document.getElementById('qr-text').value;
    const qrOutputDiv = document.getElementById('qr-code-output');
    const qrStatus = document.getElementById('qr-status');

    qrOutputDiv.innerHTML = ''; // Clear previous QR code
    qrStatus.textContent = '';

    if (!text) {
        qrStatus.textContent = "Please enter text or a link for the QR code.";
        return;
    }

    try {
        const qr = new QRious({
            element: document.createElement('canvas'),
            value: text,
            size: 100
        });
        qrOutputDiv.appendChild(qr.element);
        qrStatus.textContent = "QR Code generated!";
    } catch (e) {
        qrStatus.textContent = "Error generating QR Code. Please check input.";
        console.error("QRious error:", e);
    }
}

// 6. Text Case Converter
function convertCase(caseType) {
    const input = document.getElementById('case-converter-input').value;
    let output = '';

    switch (caseType) {
        case 'uppercase':
            output = input.toUpperCase();
            break;
        case 'lowercase':
            output = input.toLowerCase();
            break;
        case 'titlecase':
            output = input.replace(/\w\S*/g, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
            break;
        default:
            output = input;
    }
    document.getElementById('case-converter-output').value = output;
}

// 7. Color Palette Picker
function generateColorPalette() {
    for (let i = 1; i <= 5; i++) {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        document.getElementById(`color${i}`).style.backgroundColor = randomColor;
        document.getElementById(`color${i}`).title = randomColor; // Show hex on hover
    }
}
// Initial color palette generation on load
window.onload = generateColorPalette;

// 8. Unit Converter
function convertUnit() {
    const value = parseFloat(document.getElementById('unit-input').value);
    const fromUnit = document.getElementById('unit-from').value;
    const toUnit = document.getElementById('unit-to').value;
    const output = document.getElementById('unit-output');
    let result;

    if (isNaN(value)) {
        output.textContent = "Please enter a valid number.";
        return;
    }

    // Conversions
    if (fromUnit === "cm" && toUnit === "inch") {
        result = value / 2.54;
    } else if (fromUnit === "inch" && toUnit === "cm") {
        result = value * 2.54;
    } else if (fromUnit === "kg" && toUnit === "lb") {
        result = value * 2.20462;
    } else if (fromUnit === "lb" && toUnit === "kg") {
        result = value / 2.20462;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (value * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (value - 32) * 5/9;
    } else if (fromUnit === toUnit) {
        result = value; // Same unit, no conversion needed
    } else {
        output.textContent = "Invalid conversion selected.";
        return;
    }

    output.textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

// 9. Markdown to HTML Converter (Basic conversion, full Markdown parsing is complex)
function convertMarkdownToHtml() {
    const markdown = document.getElementById('markdown-input').value;
    let html = markdown;

    // Basic conversions (very simplified)
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>'); // H3
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>'); // H2
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');   // H1
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>'); // Bold
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');     // Italic
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>'); // Links
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>'); // List items (simple, no ul/ol wrapper)

    // Add paragraph tags for remaining lines (simple)
    const lines = html.split('\n').filter(line => line.trim() !== '');
    let finalHtml = '';
    lines.forEach(line => {
        if (!line.startsWith('<h') && !line.startsWith('<li') && !line.startsWith('<a')) {
            finalHtml += `<p>${line}</p>\n`;
        } else {
            finalHtml += `${line}\n`;
        }
    });

    document.getElementById('html-output').value = finalHtml;
}

// 10. Emoji Picker
function copyEmoji(element) {
    const emoji = element.textContent;
    document.getElementById('selected-emoji').value = emoji;
    // Optionally auto-copy
    // copyToClipboard('selected-emoji');
}