export default function Privacy() {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto max-w-3xl prose prose-invert">
      <h1>Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: June 26, 2026</p>
      
      <h2>1. Introduction</h2>
      <p>
        Raksha Setu is a safety and emergency response application designed to help users quickly alert their emergency contacts in case of danger.
      </p>
      <ul>
        <li>The app does not collect, store, or transmit personal data to external servers.</li>
        <li>All sensitive information, such as emergency contacts and location data, is stored locally on the user's device only.</li>
        <li>We do not sell, share, or transfer user data to any third party.</li>
        <li>The app operates solely on device-level logic, using native storage and standard Android permissions.</li>
      </ul>

      <h2>2. Data Collection & Usage</h2>
      <p>
        We believe in data minimization – collecting only what is necessary for the app to function.
      </p>

      <h3>Data We Do Not Collect</h3>
      <p>Raksha Setu does not:</p>
      <ul>
        <li>Collect your personal identity (name, email, phone number, Aadhaar, etc.).</li>
        <li>Upload your contacts to our servers.</li>
        <li>Track or sell your browsing behavior.</li>
        <li>Store any information in cloud servers.</li>
      </ul>

      <h3>Data Stored Locally (on Device)</h3>
      <p>
        The following data is saved securely within your phone's local storage and is never transmitted externally:
      </p>
      <ul>
        <li>Emergency contacts you add (name & number).</li>
        <li>Messages you set to send during emergencies.</li>
        <li>Location information only when an SOS is triggered.</li>
      </ul>

      <h3>How We Use the Data</h3>
      <p>The app uses this information exclusively for:</p>
      <ul>
        <li>Sending SMS with your live location to saved emergency contacts.</li>
        <li>Triggering an emergency SOS when the Volume Down button is pressed for 10 seconds or more.</li>
        <li>Enhancing your safety during critical situations.</li>
      </ul>

      <h2>3. Permissions We Request</h2>
      <p>
        Raksha Setu requires certain Android permissions to function effectively:
      </p>
      
      <h4>Location Permission (Foreground & Background)</h4>
      <ul>
        <li>Used only to fetch your live GPS location during an SOS.</li>
        <li>Location is sent directly to your emergency contacts via SMS/Google Maps link.</li>
        <li>We never store or share location data with anyone.</li>
      </ul>

      <h4>SMS Permission</h4>
      <ul>
        <li>Required to send automated emergency messages to your saved contacts.</li>
        <li>SMS content and recipients are entirely user-defined.</li>
        <li>No SMS is sent without your action (e.g., pressing Volume Down for SOS).</li>
      </ul>

      <h4>Phone Permission (Optional in Some Devices)</h4>
      <ul>
        <li>Used to make direct emergency calls to selected contacts (if enabled).</li>
        <li>We do not record or monitor phone calls.</li>
      </ul>

      <h4>Accessibility Service</h4>
      <ul>
        <li>Required to detect long-press of the Volume Down button even when the phone screen is locked.</li>
        <li>The accessibility service does not monitor personal activity, keystrokes, or app usage.</li>
        <li>It is strictly limited to emergency gesture recognition.</li>
      </ul>

      <h4>Notification Access (Optional)</h4>
      <ul>
        <li>May be used to display reminders or confirmations when SOS is triggered.</li>
        <li>We do not read or share your notifications.</li>
      </ul>

      <h2>4. How We Protect Your Privacy</h2>
      <ul>
        <li><strong>No Cloud Storage:</strong> All data stays on your device.</li>
        <li><strong>No Ads or Trackers:</strong> Raksha Setu does not include third-party ad SDKs or analytics trackers.</li>
        <li><strong>Encryption:</strong> Wherever possible, sensitive information is stored in encrypted form in local storage.</li>
        <li><strong>Offline Functionality:</strong> The app works without requiring internet (except for sending SMS/Maps links).</li>
      </ul>

      <h2>5. Children's Privacy</h2>
      <ul>
        <li>Raksha Setu is not directed to children under the age of 13.</li>
        <li>We do not knowingly collect personal information from children.</li>
        <li>Parents/guardians should supervise if minors use the app for safety purposes.</li>
        <li>If we become aware of accidental collection from children, we immediately delete the data.</li>
      </ul>

      <h2>6. Third-Party Services</h2>
      <ul>
        <li>Raksha Setu is a standalone application.</li>
        <li>We do not use third-party SDKs that track users.</li>
        <li>The only third-party integration is Google Maps, used for generating location links.</li>
        <li>When you send an SOS, your location is shared via a Google Maps URL—but no extra data is sent.</li>
      </ul>

      <h2>7. Security Measures</h2>
      <p>We follow strong security practices to ensure user data safety:</p>
      <ul>
        <li>Local storage with restricted access.</li>
        <li>Accessibility services restricted to emergency use only.</li>
        <li>No remote API calls or data uploads.</li>
        <li>Regular updates to maintain compliance with Google Play policies.</li>
      </ul>

      <h2>8. Legal Compliance & User Rights</h2>
      <p>Raksha Setu complies with:</p>
      <ul>
        <li>Google Play Developer Policies</li>
        <li>Indian IT Act & Data Protection Rules</li>
        <li>GDPR (General Data Protection Regulation – EU)</li>
        <li>CCPA (California Consumer Privacy Act – USA)</li>
      </ul>
      <p>Even though we do not collect data, users have the right to:</p>
      <ul>
        <li>Know what data is stored (only local).</li>
        <li>Delete their contacts/messages anytime from the app.</li>
        <li>Uninstall the app to erase all stored data permanently.</li>
      </ul>

      <h2>9. Limitations & Disclaimer</h2>
      <ul>
        <li>Raksha Setu is a support tool, not a substitute for law enforcement or emergency services.</li>
        <li>We cannot guarantee delivery of SMS if your mobile network is unavailable.</li>
        <li>We are not responsible for failures due to poor internet, blocked permissions, or device limitations.</li>
        <li>By using the app, you understand it functions on a best-effort basis.</li>
      </ul>

      <h2>10. Changes to This Policy</h2>
      <ul>
        <li>We may update this Privacy Policy from time to time.</li>
        <li>Any updates will be posted on our official website.</li>
        <li>We encourage users to review the Privacy Policy periodically.</li>
      </ul>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy, you can contact us at:
      </p>
      <p>
        Email: <a href="mailto:rakshasetuinfo@gmail.com" className="text-primary hover:underline">rakshasetuinfo@gmail.com</a>
      </p>
    </div>
  );
}