export default function Terms() {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto max-w-3xl prose prose-invert">
      <h1>Terms & Conditions</h1>
      <p className="text-muted-foreground">Last updated: June 26, 2026</p>

      <h2>1. Welcome & Agreement</h2>
      <p>
        Welcome to Raksha Setu ("App", "we", "us", "our"). These Terms & Conditions ("Terms") form a legally binding agreement between you ("you", "your", "user") governing your download, installation, and use of the Raksha Setu mobile application and related website pages (collectively, the "Service").
      </p>
      <p>
        By installing, accessing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not install or use the App.
      </p>

      <h2>2. Purpose of the App</h2>
      <p>
        Raksha Setu is a personal safety utility that enables you to quickly notify your trusted contacts during an emergency. Key features include:
      </p>
      <ul>
        <li>Triggering an SOS (e.g., by pressing and holding the Volume Down button for ~10 seconds, or by tapping the on-screen SOS button);</li>
        <li>Sending an SMS to up to three emergency contacts you configured, including a short message and a Google Maps location link (when available);</li>
        <li>Optional tools such as siren sounds, helpline numbers, and basic self-defence tips.</li>
      </ul>
      <p>
        <strong>No server storage:</strong> We do not collect or store your personal data on our servers. Contacts, settings, and any SOS templates are stored locally on your device (see Privacy Policy for details).
      </p>

      <h2>3. Important Safety Disclaimer</h2>
      <p>
        Raksha Setu is not a substitute for contacting official emergency services (e.g., dialing 112 in India). In life-threatening situations, you should contact your local emergency number immediately. The App operates on a best-effort basis and cannot guarantee message delivery, location accuracy, or uninterrupted operation due to network conditions, device restrictions, or permission settings outside of our control.
      </p>

      <h2>4. Eligibility & Legal Use</h2>
      <p>
        You must be legally competent to agree to these Terms under the laws of your jurisdiction. If you are under the age required by applicable law, you may use the App only with the consent and supervision of a parent or legal guardian.
      </p>
      <p>
        You agree to use the App lawfully and responsibly. Do not use the App to harass, stalk, surveil, threaten, or otherwise harm others. Do not trigger false alarms or spam contacts.
      </p>

      <h2>5. License; Ownership; Restrictions</h2>
      <h3>License:</h3>
      <p>
        Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on your personal device for lawful personal, non-commercial purposes.
      </p>

      <h3>Ownership:</h3>
      <p>
        All rights, title, and interest in and to the App (including software, design, text, graphics, trademarks, and logos) are owned by us or our licensors and protected by applicable laws.
      </p>

      <h3>Restrictions:</h3>
      <p>
        You shall not (and shall not allow anyone to) reverse engineer, decompile, disassemble, copy, modify, create derivative works of, sell, resell, distribute, or exploit any part of the App, except as permitted by law. You may not remove or alter any proprietary notices.
      </p>

      <h2>6. No Accounts; Local Storage Only</h2>
      <p>
        Raksha Setu does not create user accounts and does not store data on remote servers. Your emergency contacts, message templates, and preferences are saved locally on your device's storage. Uninstalling the App generally removes locally stored data (subject to OS behavior). We do not have access to your device data.
      </p>

      <h2>7. Permissions & How They Are Used</h2>
      <p>
        Raksha Setu requests certain Android permissions solely to provide safety functions:
      </p>

      <h4>Location (precise/background)</h4>
      <p>
        Used only to obtain your location for inclusion in the SOS SMS as a Google Maps link at the time of an emergency trigger. We do not upload or store your location on servers.
      </p>

      <h4>SMS</h4>
      <p>
        Used only to send the SOS message to contacts you choose. Standard carrier charges may apply.
      </p>

      <h4>Foreground Service / Notifications</h4>
      <p>
        Keeps the SOS logic active and reliable; shows persistent notification if required by the OS.
      </p>

      <h4>Accessibility Service (limited use)</h4>
      <p>
        Used to detect the emergency trigger gesture (e.g., long-press Volume Down ~10s) so you can silently request help. We do not read your keystrokes, personal app content, or other sensitive information.
      </p>
      <p>
        Granting these permissions is voluntary, but certain features will not work without them.
      </p>

      <h2>8. Device Requirements & Limitations</h2>
      <p>
        Performance and behavior of the App depend on your device and settings:
      </p>
      <ul>
        <li><strong>Dual-SIM:</strong> SMS is typically sent using your system's default SMS SIM. Configure the default SIM in device settings for automatic sending.</li>
        <li><strong>Battery & Background Restrictions:</strong> OEMs (e.g., Samsung, Xiaomi/MIUI, etc.) may restrict background services. You may need to disable battery optimizations, lock the App in "recent apps," or allow "unrestricted" background activity for consistent SOS detection.</li>
        <li><strong>OS Version & OEM Layers:</strong> Some features (e.g., hardware button monitoring) may be limited or blocked by your device/OS security layers (Play Protect, Samsung Knox). In such cases, use the on-screen SOS as primary.</li>
        <li><strong>Network & Carrier:</strong> SMS delivery and location link usage depend on cellular connectivity and carrier services. We cannot guarantee delivery times or success.</li>
        <li><strong>Location Accuracy:</strong> GPS accuracy varies by environment (indoors, basements, tunnels). The location link may be approximate or temporarily unavailable.</li>
      </ul>

      <h2>9. Acceptable Use; Prohibited Conduct</h2>
      <p>
        You agree not to:
      </p>
      <ul>
        <li>Use the App for unlawful, harmful, harassing, or discriminatory conduct;</li>
        <li>Trigger false SOS alerts or spam messages to contacts;</li>
        <li>Track or surveil others without their explicit consent;</li>
        <li>Interfere with or circumvent App security or OS restrictions;</li>
        <li>Upload malware or attempt to reverse engineer the App;</li>
        <li>Use the App in a manner that violates others' privacy, safety, or rights.</li>
      </ul>
      <p>
        We may suspend or terminate your access for violations.
      </p>

      <h2>10. Costs & Charges</h2>
      <p>
        Raksha Setu itself may be free; however, your carrier may charge SMS or data fees. You are responsible for any charges incurred through your use of the App.
      </p>

      <h2>11. Third-Party Services & Links</h2>
      <ul>
        <li><strong>Carriers:</strong> SOS SMS is sent via your mobile network provider. Delivery reliability is subject to your carrier's network.</li>
        <li><strong>Maps:</strong> Location links typically open in Google Maps or your default maps app, governed by those providers' terms and privacy policies.</li>
        <li><strong>External Links:</strong> Our website/pages may link to third-party sites (e.g., Play Store). We are not responsible for their content, policies, or practices.</li>
      </ul>

      <h2>12. Updates; Changes to Features</h2>
      <p>
        We may provide updates, patches, or new versions that modify or discontinue certain features (including experimental triggers) at any time. Some updates may be required for continued use. We are not liable for any changes that impact your workflows.
      </p>

      <h2>13. Beta or Experimental Features</h2>
      <p>
        From time to time, we may introduce or test beta/experimental features (e.g., new gestures). Such features may be unstable, may not function as intended across all devices, and can be modified or removed without notice. Use them at your discretion.
      </p>

      <h2>14. Feedback</h2>
      <p>
        If you provide suggestions, ideas, or feedback ("Feedback"), you grant us a non-exclusive, worldwide, royalty-free, perpetual, and irrevocable license to use and incorporate the Feedback without any obligation to you.
      </p>

      <h2>15. Intellectual Property & Branding</h2>
      <p>
        "Raksha Setu," our logos, and associated marks are trademarks or trade dress of Raksha Setu. You may not use our branding without prior written consent, except to refer to the App accurately.
      </p>

      <h2>16. Termination</h2>
      <p>
        You may stop using the App at any time. We may suspend or terminate your access immediately if:
      </p>
      <ul>
        <li>You breach these Terms;</li>
        <li>We are required to do so by law or policy;</li>
        <li>Continuing to offer the App becomes commercially impractical.</li>
      </ul>
      <p>
        Upon termination, your license ends and you must uninstall the App. Sections intended to survive termination (e.g., Disclaimers, Limitation of Liability, Governing Law) shall survive.
      </p>

      <h2>17. Disclaimers (No Warranties)</h2>
      <p className="uppercase font-semibold tracking-wide">
        THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
      </p>
      <p>
        Without limiting the foregoing:
      </p>
      <ul>
        <li>We do not guarantee uninterrupted or error-free operation;</li>
        <li>We do not guarantee SMS delivery, location accuracy, or trigger recognition at all times;</li>
        <li>We are not responsible for failures caused by device/OS restrictions, denied permissions, poor network coverage, or third-party services.</li>
      </ul>

      <h2>18. Limitation of Liability</h2>
      <p className="uppercase font-semibold tracking-wide text-sm leading-relaxed">
        TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE OR OUR AFFILIATES, DIRECTORS, EMPLOYEES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, PROFITS, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE APP, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATED TO THE APP SHALL NOT EXCEED THE GREATER OF (A) INR 1,000 OR (B) THE AMOUNT YOU PAID (IF ANY) FOR THE APP IN THE SIX (6) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE CLAIM.
      </p>
      <p>
        Some jurisdictions do not allow certain disclaimers or limitations; in such cases, some of the above may not apply to you to the extent prohibited by law.
      </p>

      <h2>19. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Raksha Setu and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to:
      </p>
      <ul>
        <li>Your violation of these Terms;</li>
        <li>Your misuse of the App (including false alarms or unlawful surveillance);</li>
        <li>Your violation of any law or the rights of any third party.</li>
      </ul>

      <h2>20. Privacy</h2>
      <p>
        Your use of the App is also governed by our Privacy Policy, which explains, among other things, that we do not collect or store your personal data on servers and that all sensitive data remains on your device. Please review it carefully. In case of conflict between these Terms and the Privacy Policy, these Terms control your use of the App; the Privacy Policy controls how information is handled.
      </p>

      <h2>21. Compliance; Export; Local Laws</h2>
      <p>
        You must comply with all applicable laws and regulations related to your use of the App, including telecommunications and data protection laws. You may not use or export the App in violation of applicable export control laws. Access to the App may not be legal in certain jurisdictions; you access it at your own risk and are responsible for compliance with local laws.
      </p>

      <h2>22. App Store Terms</h2>
      <p>
        If you download the App from the Google Play Store, your use of the App must also comply with Google Play's terms and policies. Google is not responsible for providing maintenance or support for the App, nor for addressing claims relating to the App.
      </p>

      <h2>23. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise the "Last Updated" date above. Your continued use of the App after changes become effective constitutes your acceptance of the updated Terms. If you do not agree, you must stop using the App and uninstall it.
      </p>

      <h2>24. Governing Law; Venue; Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of India, without regard to conflict of laws principles. You agree to submit to the exclusive jurisdiction of the courts located in India to resolve any legal matter arising from the Terms or the App. We also encourage amicable resolution; please contact us first to try to resolve disputes informally.
      </p>

      <h2>25. Severability; Waiver; Assignment; Entire Agreement</h2>
      <p>
        If any provision of these Terms is found unenforceable, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect. Our failure to enforce any right or provision shall not constitute a waiver. You may not assign or transfer your rights under these Terms; we may assign our rights as permitted by law. These Terms, together with the Privacy Policy, constitute the entire agreement between you and us regarding the App.
      </p>

      <h2>26. Contact Us</h2>
      <p>
        For questions, concerns, or legal notices related to these Terms, please contact:
      </p>
      <p>
        Email: <a href="mailto:rakshasetu2@gmail.com" className="text-primary hover:underline">rakshasetu2@gmail.com</a>
      </p>

      <h2>Appendix A — Permission Explanations</h2>
      <h3>Quick Reference:</h3>
      <ul>
        <li><strong>Location (Precise/Background):</strong> Obtains your location only at SOS time to build a Google Maps link for your contacts. Not stored on our servers.</li>
        <li><strong>SMS:</strong> Sends your SOS message to the contacts you choose. Carrier fees may apply.</li>
        <li><strong>Foreground Service:</strong> Keeps critical emergency logic active and may show a persistent notification as required by Android.</li>
        <li><strong>Accessibility Service:</strong> Lets you trigger SOS via a discreet gesture (e.g., long-press Volume Down ~10s). We do not read your private content or keystrokes.</li>
      </ul>

      <h2>Appendix B — Reliability Tips</h2>
      <h3>Non-Contractual Guidance:</h3>
      <ul>
        <li>Keep the App updated; allow required permissions.</li>
        <li>Consider disabling battery optimizations for Raksha Setu to improve background reliability.</li>
        <li>Set a default SMS SIM on dual-SIM devices.</li>
        <li>In case OEM security layers (e.g., Samsung Knox, Play Protect warnings) restrict triggers, use the on-screen SOS button.</li>
      </ul>
    </div>
  );
}