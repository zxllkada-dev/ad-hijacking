// ads.js
document.addEventListener('DOMContentLoaded', function() {
    // Banner
    var banner = document.createElement('div');
    banner.innerHTML = '<div style="position:fixed;top:0;left:0;width:100%;background:red;color:white;padding:10px;text-align:center;z-index:99999;">🔓 DNS Hijack | <a href="#" style="color:yellow">Click Here</a> | <button onclick="this.parentNode.style.display=\'none\'" style="background:black;color:white;border:none;padding:2px 10px;margin-left:10px;">X</button></div>';
    document.body.appendChild(banner);
    
    // Popup after 3s
    setTimeout(function() {
        var popup = document.createElement('div');
        popup.innerHTML = '<div style="position:fixed;bottom:20px;right:20px;background:white;border:2px solid blue;padding:15px;z-index:99998;"><h4>Offer!</h4><button onclick="this.parentNode.parentNode.style.display=\'none\'">Close</button></div>';
        document.body.appendChild(popup);
    }, 3000);
    
    // Log
    console.log('DNS Hijack:', document.cookie);
});
