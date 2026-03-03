# 💼 Brian Riant Portfolio

A modern, interactive portfolio website showcasing my work, skills, and blog posts. Built with Next.js 15 and Motion (Framer Motion), featuring smooth animations, dark mode support, and a fully responsive design.

## ✨ Technologies

- `Next.js 15`
- `React 19`
- `Motion` (Framer Motion)
- `Tailwind CSS`
- `Lucide React`
- `Vercel Speed Insights`
- `Cosmic CMS` - Headless CMS for blog content

## 🚀 Features

- **Dynamic Animations**: Smooth page transitions and reveal animations powered by Motion
- **Dark Mode**: Full dark/light theme support with seamless switching
- **Blog System**: Powered by Cosmic CMS with rich text editing
- **Responsive Design**: Optimized for all screen sizes
- **Performance**: Image optimization with Next.js Image component
- **Toast Notifications**: User-friendly feedback with React Toastify
- **SEO Optimized**: Built-in sitemap and robots.txt generation
- **Server Components**: Navbar and Footer optimized as server components

## 📍 The Process

Building a portfolio is always a journey of showing who you are through code. I wanted something that felt personal but professional, with animations that enhance rather than distract. Started with Next.js for its excellent routing and optimization features, then layered in Motion to bring life to the page transitions and component reveals. The dark mode was a must-have, and I made sure it persists across sessions. Added a blog system to share my thoughts on development, keeping it simple with markdown files. The whole thing is built with reusable components, making it easy to update and maintain as I grow.

## 🚦 Running the Project

1. Clone the repository

   ```bash
   git clone https://github.com/brianriant/brianriant_portfolio.git
   cd brianriant_portfolio
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run development server

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Setting up Cosmic CMS

This portfolio uses Cosmic CMS as a headless CMS for blog content. Follow these steps to set it up:

### 1. Create a Cosmic Account

- Go to [Cosmic Dashboard](https://app.cosmicjs.com/login)
- Sign up or log in

### 2. Create a Blog Posts Object Type

1. In your Cosmic project, navigate to **Object Types**
2. Create a new Object type called `Blog Posts` with slug `blog-posts`
3. Add the following metafields:
   - **Title**: Title (default field)
   - **Slug**: Slug (default field)
   - **Image**: Image type with key `image`
   - **Excerpt**: Text type with key `excerpt`
   - **Content**: Rich text type with key `content`
   - **Date**: Date type with key `date`
   - **Read Time**: Text type with key `read_time` (optional, e.g., "5 min read")

### 3. Add Your Blog Posts

Create blog posts in the Cosmic dashboard with all the required fields.

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. In Cosmic Dashboard, go to **Project Settings > API Keys**

3. Update `.env.local` with your credentials:

   ```env
   BUCKET_SLUG=your_bucket_slug_here
   BUCKET_READ_KEY=your_bucket_read_key_here
   ```

4. Restart your development server

### 5. Verify the Integration

Visit [http://localhost:3000/blog](http://localhost:3000/blog) to see your blog posts from Cosmic!

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm run start

```

## 📂 Project Structure

```
app/
├── components/      # Reusable UI components
├── blog/           # Blog pages and posts
├── context/        # React context providers
├── resume/         # Resume page
└── globals.css     # Global styles

assets/             # Static assets and data
public/             # Public static files
```

## 📝 License

MIT
