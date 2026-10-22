export type OpenSourcePackage = {
    name: string;
    slug: string;
    summary: string;
    description: string;
    image: string;
    technologies: string[];
    repository: string;
    packageUrl: string;
    featured: boolean;
};

export const packages = [
    {
        name: "Laravel Guards",
        slug: "laravel-guards",
        summary:
            "مدیریت مستقل گاردها و نشست‌های احراز هویت در لاراول.",
        description:
            "Laravel Guards زیرساختی برای مدیریت چند سازوکار مستقل احراز هویت در یک برنامه Laravel فراهم می‌کند. با استفاده از این پکیج می‌توان گاردها، نشست‌های کاربری و میان‌افزارهای مرتبط را متناسب با هر نوع کاربر تفکیک کرد؛ برای مثال، کاربران عادی و مدیران سیستم می‌توانند از مسیرهای احراز هویت و نشست‌های مستقل استفاده کنند. این جداسازی به طراحی ساختاریافته‌تر لایه احراز هویت، کاهش تداخل میان بخش‌های مختلف برنامه و مدیریت دقیق‌تر دسترسی‌ها کمک می‌کند.",
        image: "/images/packages/laravel-guards.webp",
        technologies: ["PHP", "Laravel"],
        repository: "https://github.com/fbpkg/laravel-guards",
        packageUrl: "https://packagist.org/packages/fbpkg/laravel-guards",
        featured: true,
    },
    {
        name: "Laravel RBAC",
        slug: "laravel-rbac",
        summary:
            "مدیریت نقش‌ها و دسترسی‌ها در برنامه‌های لاراول.",
        description:
            "Laravel RBAC با هدف سازمان‌دهی کنترل دسترسی مبتنی بر نقش (Role-Based Access Control) توسعه داده شده است. این پکیج امکان طراحی ساختاری مشخص برای تعریف نقش‌ها و مدیریت مجوزهای دسترسی را فراهم می‌کند تا تعیین قابلیت‌های مجاز برای کاربران، به‌جای پراکندگی در بخش‌های مختلف کد، بر اساس یک سازوکار متمرکز انجام شود. نتیجه، مدیریت‌پذیری بهتر سطح دسترسی‌ها و سهولت بیشتر در توسعه و نگهداری سیستم‌های دارای نقش‌ها و مجوزهای متنوع است.",
        image: "/images/packages/laravel-rbac.webp",
        technologies: ["PHP", "Laravel"],
        repository: "https://github.com/fbpkg/laravel-rbac",
        packageUrl: "https://packagist.org/packages/fbpkg/laravel-rbac",
        featured: true,
    },
    {
        name: "Laravel Creds",
        slug: "laravel-creds",
        summary:
            "مدیریت فرایندهای احراز هویت و اعتبارسنجی کاربران.",
        description:
            "Laravel Creds مجموعه‌ای از قابلیت‌ها برای پیاده‌سازی و مدیریت فرایندهای مرتبط با احراز هویت کاربران است. این پکیج با هدف فراهم‌کردن زیرساختی قابل استفاده مجدد برای قابلیت‌هایی مانند تأیید هویت با رمز یک‌بارمصرف (OTP)، مدیریت تاریخچه رمزهای عبور و سایر سازوکارهای مرتبط طراحی شده است. با متمرکزکردن این منطق در یک پکیج مستقل، توسعه‌دهندگان می‌توانند قابلیت‌های احراز هویت را با انسجام بیشتری پیاده‌سازی کنند و از تکرار منطق مشابه در پروژه‌های مختلف بکاهند.",
        image: "/images/packages/laravel-creds.webp",
        technologies: ["PHP", "Laravel"],
        repository: "https://github.com/fbpkg/laravel-creds",
        packageUrl: "https://packagist.org/packages/fbpkg/laravel-creds",
        featured: true,
    },
    {
        name: "Laravel SMS",
        slug: "laravel-sms",
        summary:
            "اتصال یکپارچه به سرویس‌های پیامکی ایرانی.",
        description:
            "Laravel SMS لایه‌ای یکپارچه برای ارتباط با وب‌سرویس‌های ارسال پیامک ایرانی در برنامه‌های Laravel فراهم می‌کند. هدف این پکیج، کاهش وابستگی منطق کسب‌وکار به ساختار اختصاصی هر ارائه‌دهنده پیامک است؛ به‌طوری‌که فراخوانی سرویس‌ها از طریق یک رابط و سینتکس هماهنگ انجام شود. این رویکرد، افزودن قابلیت ارسال پیامک، نگهداری کدهای مرتبط و توسعه پشتیبانی از سرویس‌دهندگان مختلف را ساده‌تر می‌کند و از پراکندگی پیاده‌سازی‌های اختصاصی در بخش‌های مختلف برنامه جلوگیری می‌کند.",
        image: "/images/packages/laravel-sms.webp",
        technologies: ["PHP", "Laravel"],
        repository: "https://github.com/fbpkg/laravel-sms",
        packageUrl: "https://packagist.org/packages/fbpkg/laravel-sms",
        featured: true,
    },
    {
        name: "Laravel Support",
        slug: "laravel-support",
        summary:
            "ابزارهای مشترک و کاربردی برای پروژه‌های PHP.",
        description:
            "Laravel Support مجموعه‌ای از توابع و ابزارهای عمومی است که برای استفاده مجدد در پروژه‌های PHP و پکیج‌های Fbpkg توسعه داده شده‌اند. این مجموعه قابلیت‌هایی مانند کار با شماره تلفن، تبدیل ارقام و تولید مقادیر تصادفی را در اختیار توسعه‌دهندگان قرار می‌دهد. هدف آن، متمرکزکردن ابزارهای پرتکرار در یک محل مشخص، جلوگیری از بازنویسی کدهای مشابه و فراهم‌کردن پایه‌ای مشترک برای توسعه و نگهداری ساده‌تر پروژه‌ها و پکیج‌های وابسته است.",
        image: "/images/packages/laravel-support.webp",
        technologies: ["PHP", "Laravel"],
        repository: "https://github.com/fbpkg/laravel-support",
        packageUrl: "https://packagist.org/packages/fbpkg/laravel-support",
        featured: true,
    },
    {
        name: "Laravel Response",
        slug: "laravel-response",
        summary:
            "ساختار یکپارچه برای پاسخ‌های بک‌اند به فرانت‌اند.",
        description:
            "Laravel Response راهکاری برای تعریف و مدیریت ساختار یکپارچه پاسخ‌های بک‌اند در برنامه‌های Laravel است. با استفاده از این پکیج، قالب پاسخ‌های ارسالی به فرانت‌اند در یک لایه متمرکز تعریف می‌شود تا بخش‌های مختلف برنامه از ساختاری هماهنگ پیروی کنند. این رویکرد، وابستگی فرانت‌اند به قرارداد مشخصی برای دریافت پاسخ‌ها را قابل مدیریت‌تر می‌کند و در صورت نیاز به تغییر ساختار پاسخ، امکان اعمال تغییرات از یک نقطه مشترک را فراهم می‌سازد؛ بدون اینکه لازم باشد منطق مشابه در بخش‌های مختلف هر پروژه جداگانه اصلاح شود.",
        image: "/images/packages/laravel-response.webp",
        technologies: ["PHP", "Laravel"],
        repository: "https://github.com/fbpkg/laravel-response",
        packageUrl: "https://packagist.org/packages/fbpkg/laravel-response",
        featured: true,
    },
] satisfies OpenSourcePackage[];