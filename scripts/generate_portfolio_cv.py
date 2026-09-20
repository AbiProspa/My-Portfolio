from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "Abiodun-Prosper-CV.pdf"
NAVY = colors.HexColor("#101827")
BLUE = colors.HexColor("#2563eb")
INK = colors.HexColor("#202938")
MUTED = colors.HexColor("#5d6878")
RULE = colors.HexColor("#d7dfeb")


def make_styles():
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(
        name="SectionHeading", fontName="Helvetica-Bold", fontSize=10,
        leading=13, textColor=BLUE, spaceBefore=8, spaceAfter=5,
        keepWithNext=True,
    ))
    styles.add(ParagraphStyle(
        name="BodyCopy", fontName="Helvetica", fontSize=8.8, leading=12.1,
        textColor=INK, spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name="SkillCopy", fontName="Helvetica", fontSize=8.5, leading=11.2,
        textColor=INK, spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name="Role", fontName="Helvetica-Bold", fontSize=9.2, leading=12,
        textColor=INK,
    ))
    styles.add(ParagraphStyle(
        name="CVBullet", fontName="Helvetica", fontSize=8.6, leading=11.6,
        textColor=INK, leftIndent=10, firstLineIndent=-8, bulletIndent=0,
        spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name="Project", fontName="Helvetica", fontSize=8.7, leading=11.8,
        textColor=INK, spaceAfter=5,
    ))
    styles.add(ParagraphStyle(
        name="Small", fontName="Helvetica", fontSize=8.4, leading=11.5,
        textColor=INK, spaceAfter=3,
    ))
    return styles


def header_footer(canvas, doc):
    width, height = A4
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 91, width, 91, fill=1, stroke=0)
    canvas.setFillColor(BLUE)
    canvas.rect(0, height - 94, width, 3, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 22)
    canvas.drawString(48, height - 34, "ABIODUN PROSPER")
    canvas.setFont("Helvetica-Bold", 9.5)
    canvas.drawString(48, height - 51, "FULL-STACK DEVELOPER  |  TYPESCRIPT, REACT, NODE.JS")
    canvas.setFont("Helvetica", 8)
    canvas.drawString(48, height - 68, "Lagos, Nigeria  |  +234 703 915 7861  |  Abiodunprosper07@gmail.com")
    canvas.setFillColor(colors.HexColor("#bfcee2"))
    canvas.drawString(48, height - 82, "github.com/AbiProspa  |  linkedin.com/in/abiodun-prosper-aa1428261  |  prosper-portfolio.onrender.com")
    canvas.setStrokeColor(RULE)
    canvas.line(48, 31, width - 48, 31)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 8)
    canvas.drawString(48, 19, "Abiodun Prosper  |  Full-Stack Developer")
    canvas.drawRightString(width - 48, 19, f"Page {doc.page}")
    canvas.restoreState()


def section(story, styles, title):
    story.append(Paragraph(title.upper(), styles["SectionHeading"]))


def role(story, styles, title, company, dates, bullets):
    story.append(KeepTogether([
        Paragraph(
            f'<font name="Helvetica-Bold">{title} | {company}</font>'
            f'<font color="#5d6878">  {dates}</font>',
            styles["Role"],
        ),
        *[Paragraph(text, styles["CVBullet"], bulletText="•") for text in bullets],
        Spacer(1, 3),
    ]))


def build():
    styles = make_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT), pagesize=A4, rightMargin=48, leftMargin=48,
        topMargin=106, bottomMargin=43, title="Abiodun Prosper - Full-Stack Developer CV",
        author="Abiodun Prosper",
    )
    story = []

    section(story, styles, "Professional Summary")
    story.append(Paragraph(
        "Full-stack developer with 5+ years of experience building digital products, with professional software work since 2020. "
        "Experienced across fintech, eCommerce, and edtech, delivering web and mobile applications with React, Next.js, Vue, "
        "and React Native, plus APIs with Node.js, NestJS, Express, and Laravel. Combines payment, database, authentication, "
        "and AI workflow experience with a UI/UX foundation and ownership from design through release.",
        styles["BodyCopy"],
    ))

    section(story, styles, "Technical Skills")
    for label, items in [
        ("Languages", "TypeScript, JavaScript, PHP"),
        ("Frontend", "React, Next.js, React Native, Vue.js, Redux, Tailwind CSS, HTML5, CSS3"),
        ("Backend", "Node.js, NestJS, Express.js, Laravel, REST APIs"),
        ("Data and integrations", "PostgreSQL, MySQL, MongoDB, Redis, Paystack, Flutterwave, JWT, OAuth 2.0, Google Sign-In"),
        ("AI and tools", "OpenAI and Claude API integration, WhatsApp automation, n8n, Git/GitHub, Docker, CI/CD, Postman, Figma"),
    ]:
        story.append(Paragraph(f"<b>{label}:</b> {items}", styles["SkillCopy"]))

    section(story, styles, "Professional Experience")
    role(story, styles, "Web and Mobile Developer", "Ecobank Nigeria", "2025 - Present", [
        "Develop a mobile-first internal banking operations application using React Native and Next.js, integrated with Node.js and Express services.",
        "Improved transaction completion speed by 30% through workflow and UI refinements, with Redux state management.",
    ])
    role(story, styles, "Full-Stack Developer", "Devnnova", "Jan 2023 - Aug 2025", [
        "Built AltBank and Entrant products across React Native, Next.js, and NestJS, working with a shared API gateway.",
        "Built the Entrant CMS admin portal so the team could manage country-specific content shown in the mobile app.",
        "Integrated OpenAI and Claude APIs into customer-support and WhatsApp automation workflows, using n8n for business process automation.",
        "Consolidated the Altmobile Laravel API reference and Postman collection for team use.",
    ])

    role(story, styles, "Full-Stack Developer", "TechVerse", "Jan 2022 - Aug 2023", [
        "Delivered fintech and eCommerce applications with Vue.js and React interfaces backed by Laravel and Node.js services.",
        "Integrated Paystack and Flutterwave payments, referral features, and delivery-coverage APIs into checkout workflows.",
        "Translated Figma designs into production-ready interfaces and contributed to API performance and deployment workflow improvements.",
    ])

    role(story, styles, "UI/UX Designer", "Hephzibah Edutech", "2020 - 2022", [
        "Designed a Figma CRM dashboard for student enrollment and management workflows.",
        "Used user research and interface improvements to reduce administrative workload by 40%.",
        "Collaborated with developers on React.js and Tailwind CSS implementation, connecting design decisions to shipped product flows.",
    ])

    section(story, styles, "Selected Projects")
    for title, text in [
        ("Entrant - Newcomer Platform", "Built the system across a React Native mobile app, Next.js web platform, and CMS admin portal, with NestJS and PostgreSQL services. The CMS manages country-specific content shown in the mobile app."),
        ("AltBank - Digital Banking Product", "Contributed to mobile and web product development using React Native, Next.js, and NestJS, with services accessed through a shared API gateway."),
        ("Yummeals - Mobile and Web Platform", "Built the mobile app and web platform with React Native and Laravel, including a guided NPS and marketing-intent flow with real-time validation."),
        ("AltDrive - Vehicle Finance Platform", "Built a vehicle browsing and finance application platform with React, TypeScript, Laravel, and Filament admin tools."),
    ]:
        story.append(Paragraph(f"<b>{title}:</b> {text}", styles["Project"]))

    section(story, styles, "Education and Certification")
    story.append(Paragraph("<b>B.Sc. Computer Science</b>, Lagos State University (LASU) - 2022", styles["Small"]))
    story.append(Paragraph("<b>OND, Electrical and Electronic Engineering</b>, Moshood Abiola Polytechnic - 2020-2022", styles["Small"]))
    story.append(Paragraph("<b>Backend Development Certification</b>, DevTown - 2024", styles["Small"]))

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)


if __name__ == "__main__":
    build()
