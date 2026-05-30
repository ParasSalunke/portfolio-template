# Modern Developer Portfolio Template

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-0055FF?style=for-the-badge&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A highly polished, premium, and fully responsive open-source portfolio template designed for Data Scientists, Software Engineers, and tech professionals. Built completely from scratch with modern web standards, this template is easy to customize, deploy, and scale.

---

## ✨ Features

- **Modern Tech Stack:** Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.
- **Stunning UI/UX:** Premium design with glassmorphism, subtle noise textures, and smooth 60fps animations powered by Framer Motion.
- **Beautiful Components:** Uses the powerful `shadcn/ui` ecosystem for buttons, cards, badges, tooltips, and forms.
- **Dynamic Routing & Filtering:** Filter projects and certificates by category with animated layout transitions.
- **Dark Mode First:** Full support for system, light, and dark modes via `next-themes`.
- **Working Contact Form:** Serverless email sending integration out-of-the-box using the Resend API.
- **SEO Optimized:** Best practices implemented with semantic HTML and optimized metadata.
- **100% Customizable:** Easily swap out data from centralized data files to make it your own.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email Service:** [Resend API](https://resend.com/)

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18.x or later)
- npm, yarn, pnpm, or bun

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory by copying the example file:
```bash
cp .env.local.example .env.local
```

Open `.env.local` and add your API keys. To enable the contact form, you will need a free API key from [Resend](https://resend.com/):
```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
> **Note:** Even without a Resend key, the development server will run fine (the contact form will just simulate a success response).

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🎨 How to Customize

This template is designed to be fully customizable without diving deep into the UI logic. All of your personal data is separated from the UI components.

### Modifying Your Data
Navigate to the `src/data/` directory to update your information:

- **`projects.ts`**: Add, remove, or modify your portfolio projects. Specify categories, tech stacks, and highlights.
- **`skills.ts`**: Update your technical skills, grouping them by categories and setting your proficiency levels (1-5).
- **`certificates.ts`**: List your certifications, bootcamps, and degrees.

### Changing the Theme & Colors
The global styles and design tokens are located in `src/app/globals.css`.
To change the primary accent color (currently blue):
1. Open `src/app/globals.css`.
2. Locate the `--primary` variable in the `:root` (Light mode) and `.dark` (Dark mode) selectors.
3. Update the HSL values to your preferred brand color.

### Updating Fonts
The template currently uses **Outfit** (headings) and **Inter** (body). 
You can modify this in `src/app/globals.css` where the Google Fonts are imported, and update the CSS variables.

---

## 📂 Folder Structure

```text
src/
├── app/
│   ├── layout.tsx               # Global layout, ThemeProvider, Navbar, Footer
│   ├── page.tsx                 # Home page (Hero, Featured Projects, Bio Preview)
│   ├── globals.css              # Global styles, Tailwind config, CSS variables
│   ├── about/                   # About page
│   ├── projects/                # Projects page
│   ├── skills/                  # Skills page
│   ├── certificates/            # Certificates page
│   ├── contact/                 # Contact form page
│   └── api/contact/route.ts     # Resend Email API Route
├── components/
│   ├── layout/                  # Navbar and Footer components
│   └── ui/                      # shadcn/ui components (buttons, cards, etc.)
└── data/                        # Centralized data files for easy customization
    ├── certificates.ts
    ├── projects.ts
    └── skills.ts
```

---

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Go to Vercel and import your repository.
3. In the environment variables section, add your `RESEND_API_KEY` and set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Click **Deploy**.

Alternatively, you can deploy to Netlify, AWS Amplify, or any standard Node.js hosting environment using `npm run build` and `npm start`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/yourusername/portfolio-template/issues).

---

## 📄 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed. Feel free to use it, modify it, and make it your own! If you found this template helpful, a star on the repository is greatly appreciated.
