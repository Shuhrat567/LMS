import {Contact2, FileCode2, FolderArchive, Home, ListCollapse} from "lucide-react";

export const navLinks = [
    { name: 'Home', route: '/', icon: Home },
    { name: 'Courses', route: '/courses', icon: ListCollapse },
    { name: 'Blogs', route: '/blogs', icon: FileCode2 },
]

export const popularCategories = [
    { name: 'Front End', slug: 'front-end' },
    { name: 'Back End', slug: 'back-end' },
    { name: 'Full Stack', slug: 'full-stack' },
    { name: "Sun'iy Intelekt", slug: 'artificial-intelligence' },
]

export const popularTags = [
    { name: 'ReactJS', slug: 'react-js' },
    { name: 'JavaScript', slug: 'java-script' },
    { name: 'NodeJS', slug: 'node-js' },
    { name: 'NextJS', slug: 'next-js' },
]

export const brand = {image: "/Brand.png"};