
GitHubCalendar(".calendar", "arjun1237");

// or enable responsive functionality:
GitHubCalendar(".calendar", "arjun1237", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "arjun1237", {
    proxy (username) {
        return fetch(`https://your-proxy.com/github?user=${username}`)
    }
}).then(r => r.text())