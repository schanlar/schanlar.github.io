# Savvas Chanlaridis — Website v4

## Two equally prominent dimensions
The homepage presents **AI & Data Science** and **Astrophysics Research** as independent, coequal professional profiles. Both receive equal-sized visual panels, prominent navigation links, three selected highlights and direct entry points. The About page likewise contains two equally sized summaries.

## Important
- Public employer/client work is anonymized and requires a confidentiality review before deployment.
- The public email address is intentionally omitted pending confirmation.
- No unsupported production deployment or migration outcomes are claimed.
- The website has not been deployed to GitHub.

# Savvas Chanlaridis website — Local Preview Edition

This distribution fixes direct local opening (`file://`) of the website. All CSS, JavaScript, and internal links use file-relative paths. Directory links explicitly target `index.html`, because local file browsers do not always resolve directory URLs as web servers do.

## Preview locally
1. Extract this entire ZIP file, preserving the folder structure.
2. Double-click **`index.html`** in the extracted folder.
3. All pages, project case studies, styles, scripts, and the résumé PDF are available offline. External links to GitHub, arXiv, LinkedIn etc. still need internet access.

For development, you may also run `python3 -m http.server 8000` from this folder and open `http://localhost:8000/`.

## Deployment
This preview edition should also render on GitHub Pages when deployed in the root of a Pages repository, but the canonical GitHub Pages/Jekyll source distribution remains the recommended editable version. For the current local review, use this archive instead of opening the Jekyll source HTML directly (which contains YAML front matter).

## Known content items requiring approval
- Client / employer project confidentiality, including the approximately 97% extraction accuracy figure.
- Clarify the reported accuracy improvement before publishing it (relative percent vs percentage points).
- Add a professional email address only after explicit approval.
- Review final CV, academic titles and completeness of publication list before going live.

The existing live GitHub Pages website has not been changed.


## Version 3 editorial update

- Two equal professional areas remain: AI & Data Science and Astrophysics Research.
- Section headings use factual labels (Projects, Research, Experience, Education, Technical Skills).
- Skills are grouped by technology, not ranked by proficiency.
- Professional projects remain independent case studies, with employer context where documented. Client identities are omitted.
- Header and footer identify the author as "SC. Savvas Chanlaridis, PhD".
- Check employer permissions for any attributed work and the user-reported accuracy metric before publishing.
- Public email has not been provided and is intentionally not displayed.


## Version 4: Combined About & CV

- The online résumé has been consolidated into `/about/`; the About page contains the biography, professional timeline, education, technical skills, teaching/talks, and direct PDF CV download.
- The primary navigation is now **About · Projects · Research · Publications · Contact**.
- The `/resume/` URL remains as a lightweight redirect to About, preserving previously shared links.
- The PDF CV is retained at `assets/pdf/Savvas_Chanlaridis_Resume.pdf`.
- The standalone Resume link was removed from navigation and page CTAs; the homepage links to About and the PDF.
- For this change, the existing PDF content was retained unchanged.
