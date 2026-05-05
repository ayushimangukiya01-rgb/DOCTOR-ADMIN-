// src/data/adminMockData.js

export const mockDoctors = [
  {
    name: "Dr. James Wilson",
    id: "DOC-9821-W",
    specialization: "Cardiology",
    experience: "12 Years",
    status: "Approve-Doctor",
    fee: "$180.00",
    avatar:     
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCU__blwIXlrMpH8DCEUqfftv37KoppmfYIS-eiWLfssu46ldqzq17xA2jFUK6QjblSZyi7vnpLmDoyCa4nBJf8_kNdvZU5feV3dpANtM5pAujLA5_x62FW1s11XXchetUelM5ihQoEArHvhW77aS--rxfrwXFqz6X3hKw4_xRbchwP29p4c6eXdo17RltdpYyTO8li3DOPriUaMSDyjMBJe9IIqTxEKXDe24drDOuDPbh-6pngYxYlHCzXd88ErqiME2OiPQgFUDNG",
  },
  {
    name: "Dr. Helena Marcus",
    id: "DOC-4412-M",
    specialization: "Neurology",
    experience: "8 Years",
    status: "Approve-Doctor",
    fee: "$210.00",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8z0LRelt9daQ2pw0EwGFCF11jpBQ-0EY7xCJibpT9FPn-E6Rb12drwz1Wag71r0BAwRv0CipHisqhxwpXxvwu-D0W__99YGSG5VwPclWLtRn9r58xcaKxUw4kFx75WEfLqTKaTGovdOGHxDXRjV7MJ8K3UHHll6-uJu0T329p6ACaw3CNlA5afcS7vCYUzF_PuEgsmbbrbfOweVDFtDtS9fIoHE9IymoNFJ-OLqIeb4E1X4jRGXstcprV8RkROBHyYLLbV5GLLjvi",
  },
  {
    name: "Dr. Marcus Thorne",
    id: "DOC-7723-T",
    specialization: "Pediatrics",
    experience: "15 Years",
    status: "Reject-Profile",
    fee: "$120.00",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyMqKd2r7E-3DqaE55Sko1AA2FpDOyw07dTnw4y0BmFIYRd-Mu2AQpl5_agRXGjj5gcQsc7S4SUcCkKm8ngin2nnB1zL-CMidzmfQyhyaxjsXIUdFSoNxylglNGfQO3ofl_ixxlWLFTK-XWv9DKikwQKm5L6CjdfJvZ8Jq8FPL4HGG0q7dra_akw5HW7OvcKxWFKtEQHFqWXW2H-odZGJKrfEtBi58tIGAFUfpWITe6MWfZu3QapNOW5TpRSuAcLsRX79TvLuxr3lV",
  },
  {
    name: "Dr. Sarah Miller",
    id: "DOC-1102-S",
    specialization: "Oncology",
    experience: "20 Years",
    status: "Reject-Profile",
    fee: "$250.00",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2-Ay1VN38Ziz3h47128YlbnzqxU7Xxbh_0jNmSH3Im1EKDsA-A9qe3X1_db5Ln3SUIORQ-flTTNRb3MibZj_NYJHq3WxBxLoQhiYvJdsNdNtcl3jPQh8Vvl71vHIQldEoCpKKhL8FTki_TIX_YrbhhI3jfADiY8bwMxxwJZMEmugIzLT2Eaz2aLMCEM57EtBiOWpxyw0LOaiHcHalQC4lnrWyPJCh9tFFKe9PG2h8VQSDKFRJ19XHSCoddzWXqNEJfSux2oxSEj2j",
  },
];

export const mockDoctorStats = [
  {
    label: "Total Doctors",
    value: "124",
    icon: "medical_services",
    bg: "bg-blue-50",
    text: "text-primary",
  },
  {
    label: " Approve Doctor",
    value: "98",
    icon: "verified",
    bg: "bg-green-50",
    text: "text-green-600",
  },
  {
    label: "Reject Profile",
    value: "12",
    icon: "event_busy",
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
  {
    label: " Pending Profile",
    value: "14",
    icon: "pending_actions",
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
];


// Appointment Bottom Cards Data

export const mockTopDoctors = [
  {
    name: "Dr. Sarah Chen",
    value: "24 appointments",
    iconClass: "bg-blue-50 text-primary",
  },
  {
    name: "Dr. James Wilson",
    value: "18 appointments",
    iconClass: "bg-green-50 text-tertiary",
  },
  {
    name: "Dr. Lisa Thorne",
    value: "15 appointments",
    iconClass: "bg-purple-50 text-purple-600",
  },
];

export const mockAppointmentTypes = [
  { label: "Consultation", value: "45%", color: "bg-blue-500" },
  { label: "Follow-up", value: "30%", color: "bg-green-500" },
  { label: "Emergency", value: "25%", color: "bg-red-500" },
];


// Appointment Header Stats

export const mockAppointmentStats = [
  {
    label: "Today",
    value: "42",
    icon: "calendar_today",
    iconClass: "bg-blue-50 text-primary",
  },
  {
    label: "Completed",
    value: "12",
    icon: "check_circle",
    iconClass: "bg-tertiary-fixed/30 text-tertiary",
  },
];



// Appointments Table Data

export const mockAppointments = [
  {
    patient: "James Davenport",
    patientId: "P-90231",
    patientInitial: "JD",
    patientAvatar: "",
    patientBg: "bg-blue-100 text-primary",
    doctor: "Dr. Robert Chen",
    doctorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWhTnjgMd_rWP2XbaV9oRZoedv1COSIDjbBcuTIwR0r_Fd35quLuS_Svg3vLOyFGYYnIWdsQV_yqX2xUucRARCDj8mKO3PFKsIoEoNs1MDBZHWM5Pqi2TwNdspyvth7T9Bij9gZiaNbx6JHQ6q3Y-ea-gSrXjCyeqpixxizZ6J2VPhYF_kzBYxVeApzJ_V8wsGAMCm3UMQ5wyadwPS8s7vxMb-azQkaZwtO-z81XzZToCd_IhYGbVXFXhr_n1oYFJXhXYTsW5ThGGF",
    date: "Oct 24, 2023",
    time: "09:30 AM",
    type: "Chat Follow-up",
    typeClass: "bg-blue-50 text-blue-700 border-blue-100",
    paymentIcon: "check_circle",
    paymentIconClass: "text-tertiary",
    payment: "$120.00",
    status: "Confirmed",
    statusClass: "bg-tertiary-fixed/20 text-tertiary border-tertiary/20",
    dotClass: "bg-tertiary",
  },
 {
    patient: "Marcus Bennett",
    patientId: "P-90881",
    patientInitial: "MB",
    patientAvatar: "",
    patientBg: "bg-tertiary-fixed-dim/40 text-tertiary",
    doctor: "Dr. Lisa Thorne",
    doctorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlylrkC2SEiDuSrf4f1XK6inAtL613tCu7vwJQKJm9k3_osBOZVmwlOdbQN4T1VBTle0dxz8tA3sC-BehWITAPYbhL22i7F4jGGjOQ_L8Gq66zv_tkONi8MKrRRnkhKe6rEFr3S8HDons-vV5nfS4jUDIe2_VDux7S0WiaXgZLgxnQCdU7JJCXaZn8yoN4Wbl41qCCZMq0IM9btbXlRgZE90-WgbuyN8MyITj3geyZ4xpaz267VvTr9W5PV2N49K1Nlb2rIV--OA58",
    date: "Oct 24, 2023",
    time: "02:00 PM",
    type: "Message",
    typeClass: "bg-error-container text-on-error-container border-error/10",
    paymentIcon: "check_circle",
    paymentIconClass: "text-tertiary",
    payment: "$400.00",
    status: "Pending",
    statusClass: "bg-surface-variant text-on-surface-variant border-outline-variant",
    dotClass: "bg-gray-400",
  },
  {
    patient: "Samuel Thompson",
    patientId: "P-90554",
    patientAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxaeEX4-gC6FJNqWxl2_pZ9MjYG-RWBL9I_y6mhBpNxob9lT9boTh2qrqClzRvjD0304JQ5HTc5lBcDWRe17f7S7DHj95hOMcbTXq6ter1DxU3VEdJArpGU35-3dWai_ZioowaLDzswP-DRuVgMgcpXu9mzOoII4QyaXd2SrP7l4HuI55vmXAbl2c_qNLLsQ7PGAkSa23g1xQZ7SIuzhWzLuKhs_SnjFvP0D4FGU00tglQSJagVGMoHhf1UopLZGBXpC25_GmAD8XY",
    doctor: "Dr. David Miller",
    doctorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzM58eB55n6CCFx8z4_-G9TsM88QssnOQTB2v_2YCn1f1XcbGBu70bEU1v561TWRW8fFAQFyBA2_Dth00922lSRf18mfSb5k-6Zkx2wV1pp6JzjF3YXZnTXr5RcBmNczgbHlU7AbggLMczDSJzYD7Ch45EppIZZGYZfyOSAYRQPJXSoZK7KeC1FrXnRh3zdLn7O_h4WyGrjO9-8zgbV9qAeCua3aiBYzzakUSLvzJH8WLVyvoZhKz5xR_AI37REM3YB06XrVIwp1Ht",
    date: "Oct 24, 2023",
    time: "03:45 PM",
    type: "Video Call",
    typeClass: "bg-blue-50 text-blue-700 border-blue-100",
    paymentIcon: "check_circle",
    paymentIconClass: "text-tertiary",
    payment: "$85.00",
    status: "Confirmed",
    statusClass: "bg-tertiary-fixed/20 text-tertiary border-tertiary/20",
    dotClass: "bg-tertiary",
  },
  {
    patient: "Elena Rodriguez",
    patientId: "P-90442",
    patientAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApTMAxdO4l2tUmJDrgEJ83z7pTYEmptr5zoftVNgGODHBiEN_denGEzdK2O4Xpks8u9niblbntsuxQTNN14A0xhxQk4VKMA0Ywe_5n-R3tTn4a21aymKrSwIvw7CCKWz6KzVTTr71XCfluRFd2TDNgsbdkqkA8mUdlE2XW6qILcbchBz9yRFGyML5KYOfqXjLA8wmKPEVESz4eiVkYbdaY-2Ak6p5Q70DlIure7C7VYegbzXhFJrLptCgOGfvFma_B58btXEUY7ODM",
    doctor: "Dr. Sarah Kostic",
    doctorInitial: "SK",
    date: "Oct 24, 2023",
    time: "11:15 AM",
    type: "Video Call",
    typeClass: "bg-secondary-container text-on-secondary-container border-outline-variant",
    paymentIcon: "pending",
    paymentIconClass: "text-error",
    payment: "$250.00",
    status: "In Progress",
    statusClass: "bg-primary-fixed/30 text-primary border-primary/20",
    dotClass: "bg-primary",
  },
];

// Dashboard Summary Cards

export const mockAdminSummaryCards = [
  {
    title: "Total Doctors",
    value: "1,284",
    icon: "medical_services",
    trendIcon: "trending_up",
    trendText: "+12% this month",
    iconClass: "bg-blue-50 text-primary",
    trendClass: "text-tertiary",
  },
  {
    title: "Pending Requests",
    value: "42",
    icon: "pending_actions",
    trendIcon: "schedule",
    trendText: "Requires review",
    iconClass: "bg-orange-50 text-orange-600",
    trendClass: "text-orange-600",
  },
  {
    title: "Total Patients",
    value: "18.5k",
    icon: "group",
    trendIcon: "trending_up",
    trendText: "+2.4k increase",
    iconClass: "bg-purple-50 text-purple-600",
    trendClass: "text-tertiary",
  },
  {
    title: "Appointments",
    value: "842",
    icon: "event",
    trendText: "Scheduled today",
    iconClass: "bg-green-50 text-tertiary",
    trendClass: "text-on-surface-variant",
  },
  {
    title: "Total Revenue",
    value: "$142k",
    icon: "payments",
    trendIcon: "trending_up",
    trendText: "+8.4% growth",
    iconClass: "bg-blue-50 text-primary",
    trendClass: "text-tertiary",
  },
  {
    title: "Support Tickets",
    value: "14",
    icon: "support_agent",
    trendIcon: "warning",
    trendText: "3 urgent",
    iconClass: "bg-red-50 text-error",
    trendClass: "text-error",
  },
];


export const mockPlatformActivities = [
  {
    icon: "verified_user",
    title: "New Doctor Verified",
    description: "Dr. Alan Turing was approved for Neurosurgery",
    time: "2 hours ago",
    iconClass: "bg-blue-50 text-primary border border-blue-100",
  },
  {
    icon: "report_problem",
    title: "Urgent Ticket Raised",
    description: "Payment gateway timeout reported by Patient ID #4292",
    time: "5 hours ago",
    iconClass: "bg-orange-50 text-orange-600 border border-orange-100",
  },
  {
    icon: "monitoring",
    title: "Monthly Analytics Ready",
    description: "The performance report for October is now available",
    time: "Yesterday",
    iconClass: "bg-purple-50 text-purple-600 border border-purple-100",
  },
];


// Quick Actions

export const mockQuickActions = [
  {
    label: "Add Doctor",
    icon: "person_add",
    primary: true,
  },
  {
    label: "Generate Report",
    icon: "receipt_long",
  },
  {
    label: "Broadcast Message",
    icon: "mail",
  },
  {
    label: "System Config",
    icon: "settings",
  },
];


export const mockDoctorRequests = [
  {
    name: "Dr. Sarah Chen",
    specialization: "Cardiology",
    experience: "12 Years",
    date: "Oct 24, 2023",
    status: "Pending",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoUGjStZj7C3jOAQICv-YXwoFhPz4JBV3rmA8BJPJ-gxJ32Ozn7iZA_Zg1mRMvF0G7eF6tO72CF-MsEFNIvNKhbBks96SIEdTPJiHKsdBOHYys-sPp15wfqU07zWA27XnuYSVg7QRehRlO6BLaprlypbpPSexd8ufxM9ZL1ZLERZnVrCICXM_i7390Y_MjQRb43by-gRjGPPoHymeICoYOGRaqgquWCFT9QB6MBmyYN1H4tLkKn7IY7bc_y4X4fjYNgDVFl9R3HSEM",
  },
  {
    name: "Dr. James Wilson",
    specialization: "Neurology",
    experience: "8 Years",
    date: "Oct 23, 2023",
    status: "Under Review",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZh-b9xEItwjdTOaaI-eZoERLbyUDhtNxPO3CYLdeA4kdGziasIfHGZsG054s8DPvzz8Oimcge-OzTVbLjVuLUsNEhXfP1YqhV2pa5FO3BUfo6UWZdK2Z0iY7E9Ve2AwIz_oPnm8pv3XjN_A2cZd3XtyslqXvCUevatx9TXyqXyIpDgXxUtYjkwGGZ8vdPKjnPhnHpBqBDJG38L_zpY2S7mzUfFz4uVc6jyUYV0vTXsu4eCzgiqH5F5WAouVo53hIPerpFmlGubTob",
  },
  
];


// Today Appointments

export const mockTodayAppointments = [
  {
    patient: "Robert Fox",
    doctor: "Dr. Sarah Chen",
    time: "09:30 AM",
    type: "Routine Checkup",
    status: "Confirmed",
  },
  {
    patient: "Jane Cooper",
    doctor: "Dr. James Wilson",
    time: "11:00 AM",
    type: "Emergency Consultation",
    status: "In Progress",
  },
];

// Patients Table

export const mockPatients = [
  {
    name: "Eleanor Pena",
    id: "MED-99201",
    age: "34 Years",
    gender: "Female",
    phone: "(209) 555-0104",
    email: "eleanor.p@example.com",
    lastVisit: "Oct 12, 2023",
    visitType: "General Checkup",
    status: "Stable",
    statusClass: "bg-green-100 text-green-700",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX75CvWmaYUZg9o9j0rRSAb06AQ7n_SL4Yx-mQ1RLnpW3j7gpJIn-nO2aRH6Fun0HY6GRUs1YGegUCE74WbneOa-qgUaWld9GF9QczHl3s3819OevEk9mkSjxBxEEs02ppJ_dqwclZC0VjEtNJm74RqeuIfNfWMG-MksSanj3A4ZDTIXAeVp5OUXu-fCM0ePt3iV1emuNX6SRgvJexrIaQly7gyw8_Xaertv65QPnJF1h1OXE5mE-yOYfJ8WVwGdJBelRrB_aqH6Qu",
  },
  {
    name: "Robert Fox",
    id: "MED-99202",
    age: "45 Years",
    gender: "Male",
    phone: "(406) 555-0120",
    email: "robert.fox@example.com",
    lastVisit: "Oct 14, 2023",
    visitType: "Cardiology",
    status: "Critical",
    statusClass: "bg-red-100 text-red-700",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5dmA278a82NaY1hyXixd7EJWiuuAzhQCbTONOYYhnyYeyFNLO28jdaiBNequRj6o0qDY3YTe1VW1ukpo3Li4EgxArciUgzlnBwN3KIScQt3zOIEQPM6zcTtZ9z0yJt7ceyRUavbaGGe3BlWrcC2eNOaS2ucF9NBXryOuaf5pkyom5S72l01Z8DcF0XE12-I-OLNG-rTbQWEPn3Q6zpJdYWkavEyo_03jNjG36HT7FxsihL5BNu4IN7gqHu6RFuQbbStmZ4ZBcCxCs",
  },
  {
    name: "Jane Cooper",
    id: "MED-99203",
    age: "28 Years",
    gender: "Female",
    phone: "(219) 555-0114",
    email: "jane.c@example.com",
    lastVisit: "Oct 15, 2023",
    visitType: "Dermatology",
    status: "Recovering",
    statusClass: "bg-blue-100 text-blue-700",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5_7zXCOGPY7Xc60xwEKPZyJbh5j3Fip22KYcHWxy7tO2FTciGy8M7hWZ6e11dlPwI-cS35Su3wfSRL-bvsrQ_caz12lhrnEQ0Shee7zJ1boQ6Tf5eyG9UTWGvf_iJ_mCAh5OfC1FGbC326JDCU6EhDX1wfBoE34P9oZ4wd3YW3fRds1fFaujcwllwQuCaXp5cXihTb72GTOzTzsqBrtVwz7k_7XDdun-5OM4rRmgmTF_w9yulG_ALcaKBgx7gNj3-y6FtM5J4Nue",
  },
  {
    name: "Cameron Williamson",
    id: "MED-99204",
    age: "38 Years",
    gender: "Male",
    phone: "(302) 555-0107",
    email: "cam.w@example.com",
    lastVisit: "Oct 16, 2023",
    visitType: "Pediatrics",
    status: "Stable",
    statusClass: "bg-green-100 text-green-700",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDtTUjbAkve1yP4fIpaEuubCAhd_701IW-KMT3cs6qp8LPFCbooy4xsxdqUaDIqb7mgVETUMi4hwCaly19_5gD-oaRGNi-_kZzzQHHhVOgUt3JOIwn4FnXl_jWTjTDpQYIVaX5D9Aujp45oJUyCagyAJ0q896UNWXe6LCe5BIqP-MvdswvgfM71mWzxXDQ5qaQLExVAQt-bnpIunQZrcr6-WN7v53GCdG0RLtAW6xkPeMp1wELgRVp-2gCDFDnLe9Sk_xB-_zDpcAu",
  },
];


export const mockPatientStats = [
  {
    title: "Total Patients",
    value: "1,248",
    icon: "group",
    iconClass: "bg-blue-50 text-blue-600",
    change: "+12%",
    changeClass: "text-tertiary",
  },
  {
    title: "Active Treatments",
    value: "432",
    icon: "how_to_reg",
    iconClass: "bg-green-50 text-green-600",
    change: "+5%",
    changeClass: "text-tertiary",
  },
  {
    title: "Critical Alerts",
    value: "18",
    icon: "emergency",
    iconClass: "bg-orange-50 text-orange-600",
    change: "+2 today",
    changeClass: "text-error",
  },
  {
    title: "Today's Visits",
    value: "64",
    icon: "calendar_today",
    iconClass: "bg-purple-50 text-purple-600",
    change: "Scheduled",
    changeClass: "text-on-surface-variant",
  },
];


// Payments Summary

export const mockPaymentsSummary = [
  {
    title: "Total Revenue",
    value: "$124,592.00",
    icon: "account_balance_wallet",
    iconClass: "bg-primary/10 text-primary",
    trend: "+12.5%",
    footer: "Updated 2 mins ago",
  },
  {
    title: "MedPanel Commission",
    value: "$18,688.80",
    icon: "percent",
    iconClass: "bg-tertiary/10 text-tertiary",
    trend: "+4.2%",
    footer: "Across 412 bookings",
  },
  {
    title: "Payouts Pending",
    value: "$42,300.15",
    icon: "pending_actions",
    iconClass: "bg-secondary-container text-on-secondary-container",
    footer: "Review Batches",
    footerIcon: "chevron_right",
  },
  {
    title: "Billable Providers",
    value: "86 Active",
    icon: "medical_services",
    iconClass: "bg-surface-container-highest text-primary",
    doctors: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkkhVZHu9Cu982ITX4RoVsBWl-EXSZLRLN1NvGLW_Q6eSlVT52vOmWQlgkOH5cZcQjzcRiUf7EK7qjRcB_mW2vVJ0X9MV-548cJ_zf2iRhcQHBc2sl2Sci5nX3JKDsvqCAF1gva5Yqh0ZeVYzGYToDjw8lBMtHPtBehLoUnPfZ-Lmt5sGzrJDyF8xtN0_AlreKLj27VfFCOIfIHrCNNBkLFPW9imBkXIzxmKt7069Q7RiPTZ32qMa-MVaiFBEa5Bgcg9pWpYOOc77A",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3GQKUoTwOT5O4JUNWo6U09CR74xTWIF1E7xHI9TjORguwQ9mjASjLBqN5c8BnKpF5B11vrD-y0fW4HCQqFh26BzkzZc7w9wJ3ukU3WnpsVeTrNg9XQu2x9jBMTWXFTw4Hwzbu1swSZbsoe2Kg0u4ZsvNIvvi9tKKyOsKcqdMT3-gFl8lYdKJgCKe0yLzZ6VJbGaLHacqH3th9NsHPVPGzISBwJhu-Ea5YTxNzUuvAk7teUGmVWr-bXBoD6yeZWJPhCMQJ4mWbJvyZ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCwBQYAp0vc6KOlz2IZEfzHeUXh5QkhMXzTpF7Y3YyKFO7kOECVt7Aq7CMvoz7hVUmG3AoRAUQvxjW27vWDKW_bX876wLdtE0MCNbxbCgepAIv4YWCE1KZC4oO1-4aGrrE6tqCoy_FZbOwRcr-_dcAcOgBujEoUeNlDKQQeQ3-mVrdeNdis7Z6mMCsf2kzfZEqRLxcSrtkQNtFQbwXOwkZv6g_A4R0LLNqrPAinJr6whI5AwaO-hjSlIi--usC4hMrQ5Ts5MAEgmT8A",
    ],
  },
];


export const mockTransactions = [
  {
    date: "Oct 24, 2023",
    time: "09:42 AM",
    doctor: "Dr. Sarah Adams",
    department: "Cardiology",
    doctorInitial: "SA",
    patient: "Robert Fox",
    patientId: "#PAT-8821",
    amount: "$450.00",
    commission: "$67.50",
    rate: "15%",
    status: "COMPLETED",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    dotClass: "bg-tertiary",
  },
  {
    date: "Oct 24, 2023",
    time: "11:15 AM",
    doctor: "Dr. James Miller",
    department: "Neurology",
    doctorInitial: "JM",
    patient: "Leslie Alexander",
    patientId: "#PAT-9032",
    amount: "$1,200.00",
    commission: "$180.00",
    rate: "15%",
    status: "PENDING",
    statusClass: "bg-secondary-container text-on-secondary-container",
    dotClass: "bg-secondary",
  },
  {
    date: "Oct 23, 2023",
    time: "03:50 PM",
    doctor: "Dr. Emily Koh",
    department: "Dermatology",
    doctorInitial: "EK",
    patient: "Wade Warren",
    patientId: "#PAT-4412",
    amount: "$220.00",
    commission: "$33.00",
    rate: "15%",
    status: "COMPLETED",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    dotClass: "bg-tertiary",
  },
  {
    date: "Oct 23, 2023",
    time: "01:20 PM",
    doctor: "Dr. Richard Wang",
    department: "General Medicine",
    doctorInitial: "RW",
    patient: "Jane Cooper",
    patientId: "#PAT-1109",
    amount: "$150.00",
    commission: "$22.50",
    rate: "15%",
    status: "FAILED",
    statusClass: "bg-error-container text-on-error-container",
    dotClass: "bg-error",
  },
];

// Audit Timeline

export const mockAuditTimeline = [
  {
    title: "Application Submitted",
    description: "Dr. Sarah Jenkins uploaded 4 documents for review.",
    time: "Oct 24, 2023 • 10:45 AM",
    color: "bg-tertiary",
  },
  {
    title: "Auto-Verification Passed",
    description:
      "AI System successfully matched license details with state database.",
    time: "Oct 24, 2023 • 10:46 AM",
    color: "bg-primary",
  },
  {
    title: "Assigned to Auditor",
    description: "Case moved to Admin Smith's queue for final manual check.",
    time: "Oct 25, 2023 • 09:12 AM",
    color: "bg-secondary-fixed-dim",
  },
];

// Doctor Profile Summary

export const mockDoctorProfile = {
  name: "Dr. Sarah Jenkins",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJDbzoV4HVRcgrjbAJ_JTsMEsee_6P0u-MVvEWiapFtX57kxY5r_HAiGn6n7pt84ZRdCwaeW3sBxaCRe7aPjWnqAY-y2U7-FM1-AG2BZ5CMcnWa71t3-tx1cNUfD-Z84CS2Ck3ge7qipc6IBap1OAUbGLsd6uS7M4QouMuhiyez8l8Bq3WXHFqS7J3KcWJnI3Q7Q_eV6n4Y9B5SVq1LXIR7s5fIPYHYdaP9buNSqpaGOIKgKnQighDLmRqtz9KDA1lhHvtkH7naz9X",
  status: "Active",
  specialization: "Senior Cardiologist",
  degree: "MD, Ph.D.",
  experience: "12 yrs Experience",
  info: [
    ["Email Address", "s.jenkins@hospital.com"],
    ["Contact Number", "+1 (555) 012-3456"],
    ["Clinic Location", "Chicago, IL"],
  ],
};

export const mockProfessionalSummary = {
  education: "Johns Hopkins University School of Medicine",
  degree: "Doctor of Medicine (MD), 2011",
  specialties: ["Echocardiography", "Heart Failure", "Preventive Care"],
};

export const mockSubmittedDocuments = [
  {
    title: "Medical_License_2023.pdf",
    meta: "Board Certified • 2.4 MB",
    icon: "verified_user",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhXT2ZjY-48gHJucj6BNdKUkfAvt3A7TnB7XGm4uPy_R13JuWgHsrEW8ieBWBQJlGeGoPee88CVBsBCajPdl9S3ghn1-t2knCGXMrg4JgJcwa0PybqIDgMkgQA6y22Akq9gZv5lNYKsf1DKunVWl6ikj7eC8KDg1opMEia6wLAE9TNhG5miEeyg3GuiaFKRcJd7deqUpFIwUlQILVphgohGa7hh2EyDkc3hYR-me76U94IfUw_GtpmacA9MHfmDOMMli_8wBCPNxYt",
  },
  {
    title: "Passport_Verification.jpg",
    meta: "Identity Proof • 1.1 MB",
    icon: "check_circle",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvSb5WOzSEtvxZ9W-OyD_WrNaWHXjn1GvZ1gihuqgCa9xTdmnf27T8mO_RZT6c-ArbRFloRyhz_QeHnajwNDrf7YVpN0d4xBPZed2XFHBAW_TatxH05Qdcoa1YygOxLNRbubmFHyl4U5JKnpuFnKuUJkFDZpHHbY67cF-tKERSHd6_b3wjBLtOjopERPHdAEdjKhg-ASK-ITqUdEXenM4PBIKNsvjzLz5fNv_GT7Kb-JhBMUbzY6XwxREFRp73Mo-gJuhfaXTno8wo",
  },
  {
    title: "Curriculum_Vitae.pdf",
    meta: "Experience History • 850 KB",
    icon: "description",
    placeholder: "Resume_CV.pdf",
  },
  {
    title: "Fellowship_Cert.pdf",
    meta: "Specialty Certificate • 3.2 MB",
    icon: "verified",
    placeholder: "Board_Certificate.pdf",
  },
];