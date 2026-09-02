import physical from "@/assets/quickSupport/physical_damage_clean.jpg";
import system from "@/assets/quickSupport/system_slow_clean.jpg";
import port from "@/assets/quickSupport/port_issue_clean.jpg";
import speaker from "@/assets/quickSupport/speaker_camera_clean.jpg";

import Software from "@/assets/quickSupport/software_crash_clean.jpg";
import excel from "@/assets/quickSupport/excel_clean.jpg";
import hanging from "@/assets/quickSupport/freezing_clean.jpg";
import macbook from "@/assets/quickSupport/macbook_slow_clean.jpg";
import macos from "@/assets/quickSupport/macos_update_clean.jpg";
import problem from "@/assets/quickSupport/not_sure_clean.jpg";
import macbookSupportImg from "@/assets/macbook-support.jpeg";

export interface ServiceType {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  longDescription?: string;
}

export const services: ServiceType[] = [
  {
    id: 1,
    slug: "excel-not-working",
    title: "Excel Not Working",
    image: excel,
    description: "Quick diagnosis & solution within 5–10 minutes",
    longDescription: "Is your Microsoft Excel freezing, crashing, or failing to open? Our experts can quickly diagnose and resolve any Excel-related issues within 5-10 minutes. We handle corrupted files, plugin conflicts, and software glitches so you can get back to your work seamlessly."
  },
  {
    id: 2,
    slug: "laptop-hanging-freezing",
    title: "Laptop Hanging / Freezing",
    image: hanging,
    description: "Performance optimization & instant fix",
    longDescription: "A hanging or freezing laptop can significantly disrupt your productivity. We provide comprehensive performance optimization, identifying rogue processes, clearing temporary files, and ensuring your system runs smoothly without unexpected interruptions."
  },
  {
    id: 3,
    slug: "macbook-starting-slowly",
    title: "MacBook Starting Slowly",
    image: macbook,
    description: "Speed boost & system cleanup",
    longDescription: "Experiencing slow boot times on your MacBook? We offer speed-boosting services and deep system cleanups. We'll manage your startup items, optimize your disk, and resolve any underlying macOS issues to bring your MacBook's speed back to normal."
  },
  {
    id: 4,
    slug: "macos-update-not-installing",
    title: "MacOS Update Not Installing",
    image: macos,
    description: "Update & OS troubleshooting",
    longDescription: "Struggling with macOS updates that fail to download or install? Our technicians can troubleshoot the installation process, clear corrupted update files, and ensure your Mac gets upgraded to the latest version securely and flawlessly."
  },
  {
    id: 5,
    slug: "not-sure-about-the-problem",
    title: "Not Sure About the Problem",
    image: problem,
    description: "Expert diagnosis for any issue",
    longDescription: "Is your device acting up but you can't pinpoint the issue? Don't worry. Our expert technicians will conduct a full diagnostic check on your laptop or desktop to identify hardware or software failures and provide you with an effective repair plan."
  },
  {
    id: 6,
    slug: "software-not-opening",
    title: "Software Not Opening",
    image: Software,
    description: "Crash & compatibility fixes",
    longDescription: "When essential software refuses to open or crashes upon launch, it can bring your work to a halt. We resolve compatibility issues, reinstall problematic applications, and fix registry or file permissions to ensure your software runs smoothly."
  },
  {
    id: 7,
    slug: "my-system-is-slow",
    title: "My System is Slow",
    image: system,
    description: "System speed & health optimization",
    longDescription: "If your system takes ages to load applications or switch between tasks, it's time for an optimization. We clean up junk files, remove malware, optimize system settings, and recommend hardware upgrades if necessary to breathe new life into your slow system."
  },
  {
    id: 8,
    slug: "physical-damage",
    title: "Physical Damage",
    image: physical,
    description: "Screen & hardware repair",
    longDescription: "Accidents happen. Whether it's a cracked screen, a broken hinge, or liquid damage, we provide professional hardware repair services. We use high-quality replacement parts to restore your laptop's physical condition and functionality."
  },
  {
    id: 9,
    slug: "port-issue",
    title: "Port Issue",
    image: port,
    description: "Charging & USB port fixes",
    longDescription: "A faulty charging port or unresponsive USB ports can render your device unusable. Our technicians are skilled in repairing and replacing damaged ports, ensuring a stable connection for your chargers, peripherals, and data transfer devices."
  },
  {
    id: 10,
    slug: "speaker-camera-issue",
    title: "Speaker / Camera Issue",
    image: speaker,
    description: "Audio & camera troubleshooting",
    longDescription: "Having trouble with video calls due to microphone, speaker, or webcam issues? We troubleshoot and repair audio-visual components, fixing driver conflicts or replacing faulty hardware so you can communicate clearly without interruptions."
  },
  // {
  //   id: 11,
  //   slug: "macbook-support",
  //   title: "Macbook Support",
  //   image: macbookSupportImg,
  //   description: "Expert MacBook repair and maintenance",
  //   longDescription: "Our Apple-certified technicians handle all MacBook issues including logic board repairs, screen replacements, battery issues, and macOS software troubleshooting."
  // },
  // {
  //   id: 12,
  //   slug: "windows-support",
  //   title: "Windows Support",
  //   image: macbookSupportImg,
  //   description: "Comprehensive Windows PC and laptop support",
  //   longDescription: "We provide complete support for Windows operating systems. From blue screen errors and driver conflicts to OS installation and optimization, our experts ensure your PC runs flawlessly."
  // },
  // {
  //   id: 13,
  //   slug: "networking",
  //   title: "Networking",
  //   image: macbookSupportImg,
  //   description: "Home and office network setup and troubleshooting",
  //   longDescription: "Experience seamless connectivity with our networking services. We set up routers, extend Wi-Fi range, resolve connection drops, and configure secure local networks for homes and offices."
  // },
  // {
  //   id: 14,
  //   slug: "hardware-repair",
  //   title: "Hardware Repair",
  //   image: macbookSupportImg,
  //   description: "Component-level repair for all laptop brands",
  //   longDescription: "Our hardware repair services cover motherboard diagnostics, RAM/SSD upgrades, broken hinges, liquid damage, and full component-level repairs to extend the life of your device."
  // },
  // {
  //   id: 15,
  //   slug: "data-recovery",
  //   title: "Data Recovery",
  //   image: macbookSupportImg,
  //   description: "Secure data retrieval from damaged or corrupted drives",
  //   longDescription: "Lost important files? Our data recovery experts use advanced tools to retrieve data from crashed hard drives, corrupted SSDs, and accidentally formatted storage devices safely and securely."
  // },
  // {
  //   id: 16,
  //   slug: "it-amc",
  //   title: "IT AMC",
  //   image: macbookSupportImg,
  //   description: "Annual Maintenance Contracts for businesses",
  //   longDescription: "Keep your business operations smooth with our IT Annual Maintenance Contracts (AMC). We offer regular system health checks, preventive maintenance, and priority support for all your IT infrastructure."
  // }
];
