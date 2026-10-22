
export const skillLevels = [
    {
        min: 0,
        max: 39,
        label: "آشنایی اولیه",
    },
    {
        min: 40,
        max: 59,
        label: "تسلط پایه",
    },
    {
        min: 60,
        max: 74,
        label: "تسلط کاربردی",
    },
    {
        min: 75,
        max: 89,
        label: "تسلط پیشرفته",
    },
    {
        min: 90,
        max: 100,
        label: "تسلط کامل",
    },
] as const;

export type SkillLevelLabel = (typeof skillLevels)[number]["label"];

export function getSkillLevel(level: number): SkillLevelLabel {
    const normalizedLevel = Math.max(0, Math.min(100, level));

    return (
        skillLevels.find(
            (skillLevel) =>
                normalizedLevel >= skillLevel.min &&
                normalizedLevel <= skillLevel.max,
        ) ?? skillLevels[0]
    ).label;
}

export const skillTagLabels = {
    language: "زبان برنامه‌نویسی",
    backend: "بک‌اند",
    frontend: "فرانت‌اند",
    framework: "فریم‌ورک",
    library: "کتابخانه",
    runtime: "محیط اجرا",
    database: "پایگاه داده",
    cache: "کش",
    devops: "زیرساخت و استقرار",
    tool: "ابزار توسعه",
    api: "ابزارهای API",
} as const;

export type SkillTag = keyof typeof skillTagLabels;

export type Skill = {
    slug: string;
    name: string;
    level: number;
    from: string;
    to: string;
    tags: SkillTag[];
    order: number;
    featured: boolean;
};

export const skills = [
    {
        slug: "laravel",
        name: "Laravel",
        level: 95,
        from: "#FF2D20",
        to: "#B81D13",
        tags: ["backend", "framework"],
        order: 1,
        featured: true,
    },
    {
        slug: "php",
        name: "PHP",
        level: 95,
        from: "#777BB4",
        to: "#4F5B93",
        tags: ["language", "backend"],
        order: 2,
        featured: false,
    },
    {
        slug: "livewire",
        name: "Livewire",
        level: 90,
        from: "#4E56A6",
        to: "#2D357A",
        tags: ["backend", "frontend", "framework"],
        order: 3,
        featured: false,
    },
    {
        slug: "postgresql",
        name: "PostgreSQL",
        level: 75,
        from: "#336791",
        to: "#244E6E",
        tags: ["database"],
        order: 4,
        featured: true,
    },
    {
        slug: "mysql",
        name: "MySQL",
        level: 90,
        from: "#4479A1",
        to: "#2E5C7E",
        tags: ["database"],
        order: 5,
        featured: true,
    },
    {
        slug: "nodejs",
        name: "Node.js",
        level: 80,
        from: "#3C873A",
        to: "#2F6B2A",
        tags: ["backend", "runtime"],
        order: 6,
        featured: false,
    },
    {
        slug: "nestjs",
        name: "NestJS",
        level: 85,
        from: "#E0234E",
        to: "#8A112D",
        tags: ["backend", "framework"],
        order: 7,
        featured: true,
    },
    {
        slug: "angular",
        name: "Angular",
        level: 85,
        from: "#DD0031",
        to: "#A6120D",
        tags: ["frontend", "framework"],
        order: 8,
        featured: true,
    },
    {
        slug: "javascript",
        name: "JavaScript",
        level: 90,
        from: "#F7DF1E",
        to: "#C4A800",
        tags: ["language", "frontend", "backend"],
        order: 9,
        featured: false,
    },
    {
        slug: "typescript",
        name: "TypeScript",
        level: 80,
        from: "#3178C6",
        to: "#1F4F82",
        tags: ["language", "frontend", "backend"],
        order: 10,
        featured: true,
    },
    {
        slug: "react",
        name: "React",
        level: 65,
        from: "#61DAFB",
        to: "#149ECA",
        tags: ["frontend", "library"],
        order: 11,
        featured: false,
    },
    {
        slug: "redis",
        name: "Redis",
        level: 45,
        from: "#DC382D",
        to: "#A7281F",
        tags: ["database", "cache"],
        order: 12,
        featured: false,
    },
    {
        slug: "docker",
        name: "Docker",
        level: 60,
        from: "#2496ED",
        to: "#1D78BD",
        tags: ["devops", "tool"],
        order: 13,
        featured: false,
    },
    {
        slug: "linux",
        name: "Linux",
        level: 85,
        from: "#FCC624",
        to: "#B38A15",
        tags: ["devops"],
        order: 14,
        featured: false,
    },
    {
        slug: "nginx",
        name: "Nginx",
        level: 40,
        from: "#009639",
        to: "#006622",
        tags: ["devops", "tool"],
        order: 15,
        featured: false,
    },
    {
        slug: "git",
        name: "Git",
        level: 90,
        from: "#F05032",
        to: "#B83220",
        tags: ["tool"],
        order: 16,
        featured: false,
    },
    {
        slug: "openapi",
        name: "OpenAPI / Swagger",
        level: 90,
        from: "#85EA2D",
        to: "#5EA61F",
        tags: ["api", "tool"],
        order: 17,
        featured: false,
    },
    {
        slug: "postman",
        name: "Postman",
        level: 95,
        from: "#FF6C37",
        to: "#C94A1C",
        tags: ["api", "tool"],
        order: 18,
        featured: false,
    },
] satisfies Skill[];
