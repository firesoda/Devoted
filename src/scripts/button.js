function copyButton() {
	const siteURL = "https://devoted.nekoweb.org/";
	const siteName = "devoted";
	const buttonURL = "https://file.garden/acMMxqtw6Rf7Qz6n/devoted-button.png";
    
    try{
        navigator.clipboard.writeText(`<a href="${siteURL}" target="_blank"><img src="${buttonURL}" alt="${siteName} button" title="Devoted · A Yuzuru Fushimi shrine"></a>`);
        alert("Code copied! Thank you for linking Devoted!");
    } catch (err){
        alert("Failed to copy. Please try again!");
    }
}