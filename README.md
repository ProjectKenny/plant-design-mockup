This project is a design mockup used to provide clarity to those who run via Visual Studio Code (VSC) to push to GitHub repository.

## Getting Started

To be included near future; tutorial on how to commit, create branch, checkout branch, and finally push -u to GitHub repo.

TLDR; 
``` bash
git init
git add .
git commit -m "Initial commit: Plant design mockup"
git branch plant //insert your relevant branch at the end (e.g. plant)
git checkout plant //insert your relevant branch at the end (e.g. plant)
git remote add origin https://github.com/projectkenny/plant-design-mockup.git //insert your relevant URL at the end (e.g. plant-design-mockup.git)
git push -u origin plant //insert your relevant main/master branch at the end (e.g. plant)

First, run the development server:

``` bash
#Please type the following below,
npm run build //this cli is used to help check/validate potential errors (essentially none since I cleaned up - some versioning issue with Typescript latest version, however).

#Once you're confident, please proceed to run the dev (localhost).
npm run dev

Note-1: Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Note-2: If you're facing localhost error, try the network host instead - as seen on your Terminal.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
