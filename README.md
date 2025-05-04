# Paul Henderson | Software Engineer Portfolio

A modern, responsive portfolio website showcasing my professional skills, projects, and experience as a Software Engineer. This portfolio serves as a central hub for potential employers, clients, and collaborators to learn more about my work and get in touch.

[View Live Site](#) <!-- Add your live URL here when deployed -->

![Portfolio Preview](/public/preview.png) <!-- Consider adding a screenshot of your site -->

## Features

- **Responsive Design**: Looks great on all devices, from mobile to desktop
- **Dark/Light Mode**: Supports both dark and light theme preferences
- **Interactive UI**: Smooth animations and transitions for an engaging user experience
- **Project Showcase**: Highlights key projects with descriptions, technologies used, and links
- **About Section**: Professional background, skills, and personal journey
- **Contact Form**: Direct messaging capability with email notification
- **SEO Optimized**: Structured for better search engine visibility
- **Accessibility Focused**: WCAG compliant for users of all abilities

## Technologies Used

This portfolio is built with modern web technologies:

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Frontend**: [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive design
- **Email Services**: 
  - [SendGrid](https://sendgrid.com/) for contact form submission 
  - [Resend](https://resend.io/) as an alternative email service
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## Setup and Installation

### Prerequisites

- Node.js (v18 or newer)
- npm, yarn, or pnpm

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio_site
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add the following variables (adjust according to your email service choice):
   ```
   # For SendGrid
   SENDGRID_API_KEY=your_sendgrid_api_key
   CONTACT_EMAIL=your_email@example.com
   
   # For Resend (if using)
   RESEND_API_KEY=your_resend_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development Workflow

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code quality

### Making Changes

1. The main pages are located in the `src/app` directory:
   - `page.tsx` - Home page
   - `about/page.tsx` - About page
   - `projects/page.tsx` - Projects page
   - `contact/page.tsx` - Contact page

2. Update the project data in `projects/page.tsx` to showcase your own work.

3. Customize the content in all pages to reflect your personal information, skills, and experience.

4. Add your own images to the `public` directory.

## Deployment

The recommended way to deploy this portfolio is using [Vercel](https://vercel.com/), which provides optimal support for Next.js applications.

### Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel:
   - Connect to your Git provider
   - Select the repository
   - Configure environment variables
   - Deploy

Alternatively, you can use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Other Deployment Options

This application can also be deployed to other platforms such as:
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform/)

## Project Structure

```
portfolio_site/
├── public/               # Static assets and images
├── src/
│   └── app/
│       ├── about/        # About page
│       ├── api/
│       │   └── contact/  # Contact form API endpoint
│       ├── contact/      # Contact page
│       ├── projects/     # Projects page
│       ├── favicon.ico   # Site favicon
│       ├── globals.css   # Global styles
│       ├── layout.tsx    # Root layout component
│       └── page.tsx      # Home page
├── .env.local            # Environment variables (not in git)
├── .gitignore            # Git ignore file
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Customization Tips

### Personal Branding

- Update the hero section on the home page to reflect your personal brand
- Replace placeholder projects with your actual work
- Add your professional photo to the about page
- Customize colors in `globals.css` to match your personal brand

### Adding New Pages

To add a new page to your portfolio:

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file inside the new directory
3. Import and use the page in your navigation

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Paul Henderson  
[Email](mailto:your-email@example.com)  
[LinkedIn](#)  
[GitHub](#)

---

Made with ❤️ by Paul Henderson
