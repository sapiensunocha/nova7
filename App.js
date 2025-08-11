import { WebView } from 'react-native-webview';
export default function App() {
  return (
    <WebView
      source={{ uri: 'https://lifeline-wdc.com/fr/' }}
      style={{ flex: 1 }}
      originWhitelist={['https://lifeline-wdc.com']}
      onShouldStartLoadWithRequest={(request) => {
        const allowedPages = ['login.html', 'register.html', 'wallet.html', 'community.html', 'marketplace.html', 'settings.html', 'profile.html', 'dashboard.html', 'forgot-password.html', 'reset-password.html', 'email-verification.html', 'verify-email.html', 'terms-of-service.html', 'privacy-policy.html', 'user-data-deletion.html'];
        const url = request.url;
        return allowedPages.some(page => url.includes(page)) || url === 'https://lifeline-wdc.com/fr/';
      }}
    />
  );
}
