// HK DSE / HKCEE / HKAL Past Paper Database
// Original sample questions with model answers
// Covers: HKDSE (2012–present), HKCEE (1974–2011), HKALE (1980–2012)

const DB = {
  exams: {
    dse: {
      id: "dse",
      name: "HKDSE",
      fullName: "Hong Kong Diploma of Secondary Education",
      chinese: "香港中學文憑考試",
      years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      color: "#c0392b"
    },
    hkcee: {
      id: "hkcee",
      name: "HKCEE",
      fullName: "Hong Kong Certificate of Education Examination",
      chinese: "香港中學會考",
      years: [1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011],
      color: "#2980b9"
    },
    hkal: {
      id: "hkal",
      name: "HKAL",
      fullName: "Hong Kong Advanced Level Examination",
      chinese: "香港高級程度會考",
      years: [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012],
      color: "#27ae60"
    }
  },

  subjects: {
    // ── DSE CORE ──
    dse_chinese: {
      id: "dse_chinese", exam: "dse",
      name: "Chinese Language", chinese: "中國語文", cat: "Core",
      papers: ["Paper 1 (Reading)", "Paper 2 (Writing)", "Paper 3 (Listening & Integrated)", "Paper 4 (Speaking)"]
    },
    dse_english: {
      id: "dse_english", exam: "dse",
      name: "English Language", chinese: "英國語文", cat: "Core",
      papers: ["Paper 1 (Reading)", "Paper 2 (Writing)", "Paper 3 (Listening)", "Paper 4 (Speaking)"]
    },
    dse_maths: {
      id: "dse_maths", exam: "dse",
      name: "Mathematics", chinese: "數學", cat: "Core",
      papers: ["Paper 1 (Compulsory)", "Paper 2 (MC)", "Module 1 (Calculus & Stats)", "Module 2 (Algebra & Calculus)"]
    },
    dse_ls: {
      id: "dse_ls", exam: "dse",
      name: "Liberal Studies / Citizenship & Social Development", chinese: "通識教育／公民與社會發展科", cat: "Core",
      papers: ["Paper 1", "Paper 2 (SBA)"]
    },
    // ── DSE ELECTIVES ──
    dse_bio: {
      id: "dse_bio", exam: "dse",
      name: "Biology", chinese: "生物", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2 (Structured & Essay)", "SBA"]
    },
    dse_chem: {
      id: "dse_chem", exam: "dse",
      name: "Chemistry", chinese: "化學", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2 (Structured & Essay)", "SBA"]
    },
    dse_phy: {
      id: "dse_phy", exam: "dse",
      name: "Physics", chinese: "物理", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2 (Structured & Essay)", "SBA"]
    },
    dse_econ: {
      id: "dse_econ", exam: "dse",
      name: "Economics", chinese: "經濟", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2 (Data Response & Essay)"]
    },
    dse_history: {
      id: "dse_history", exam: "dse",
      name: "History", chinese: "歷史", cat: "Elective",
      papers: ["Paper 1 (Document-based)", "Paper 2 (Essay)"]
    },
    dse_geog: {
      id: "dse_geog", exam: "dse",
      name: "Geography", chinese: "地理", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2 (Fieldwork & Essay)", "SBA"]
    },
    dse_bafs: {
      id: "dse_bafs", exam: "dse",
      name: "Business, Accounting & Financial Studies", chinese: "企業、會計與財務概論", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2A (Accounting)", "Paper 2B (Business Management)"]
    },
    dse_ict: {
      id: "dse_ict", exam: "dse",
      name: "Information & Communication Technology", chinese: "資訊及通訊科技", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2 (Structured)", "SBA"]
    },
    dse_chist: {
      id: "dse_chist", exam: "dse",
      name: "Chinese History", chinese: "中國歷史", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2 (Essay)"]
    },
    dse_lit_eng: {
      id: "dse_lit_eng", exam: "dse",
      name: "Literature in English", chinese: "英語文學", cat: "Elective",
      papers: ["Paper 1 (Poetry & Prose)", "Paper 2 (Drama & Novel)"]
    },
    dse_dat: {
      id: "dse_dat", exam: "dse",
      name: "Design & Applied Technology", chinese: "設計與應用科技", cat: "Elective",
      papers: ["Paper 1 (Theory)", "SBA (Project)"]
    },
    dse_ethics: {
      id: "dse_ethics", exam: "dse",
      name: "Ethics & Religious Studies", chinese: "倫理與宗教", cat: "Elective",
      papers: ["Paper 1", "Paper 2"]
    },
    dse_music: {
      id: "dse_music", exam: "dse",
      name: "Music", chinese: "音樂", cat: "Elective",
      papers: ["Listening Paper", "Performing (SBA)", "Creating (SBA)"]
    },
    dse_va: {
      id: "dse_va", exam: "dse",
      name: "Visual Arts", chinese: "視覺藝術", cat: "Elective",
      papers: ["Art Making (SBA)", "Art Criticism & Art History Paper"]
    },
    dse_tourism: {
      id: "dse_tourism", exam: "dse",
      name: "Tourism & Hospitality Studies", chinese: "旅遊與款待", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2 (Structured)"]
    },
    dse_health: {
      id: "dse_health", exam: "dse",
      name: "Health Management & Social Care", chinese: "健康管理與社會關懷", cat: "Elective",
      papers: ["Paper 1", "SBA"]
    },
    dse_clit: {
      id: "dse_clit", exam: "dse",
      name: "Chinese Literature", chinese: "中國文學", cat: "Elective",
      papers: ["Paper 1 (Poetry & Prose)", "Paper 2 (Extended Writing)"]
    },

    // ── HKCEE ──
    hkcee_chinese: {
      id: "hkcee_chinese", exam: "hkcee",
      name: "Chinese Language", chinese: "中國語文", cat: "Core",
      papers: ["Paper 1", "Paper 2", "Paper 3 (Oral)"]
    },
    hkcee_english: {
      id: "hkcee_english", exam: "hkcee",
      name: "English Language", chinese: "英文", cat: "Core",
      papers: ["Paper 1 (Reading Comprehension)", "Paper 2 (Composition)", "Paper 3 (Listening)"]
    },
    hkcee_maths: {
      id: "hkcee_maths", exam: "hkcee",
      name: "Mathematics", chinese: "數學", cat: "Core",
      papers: ["Paper 1", "Paper 2 (MC)"]
    },
    hkcee_addmaths: {
      id: "hkcee_addmaths", exam: "hkcee",
      name: "Additional Mathematics", chinese: "附加數學", cat: "Elective",
      papers: ["Paper 1", "Paper 2"]
    },
    hkcee_bio: {
      id: "hkcee_bio", exam: "hkcee",
      name: "Biology", chinese: "生物", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2"]
    },
    hkcee_chem: {
      id: "hkcee_chem", exam: "hkcee",
      name: "Chemistry", chinese: "化學", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2"]
    },
    hkcee_phy: {
      id: "hkcee_phy", exam: "hkcee",
      name: "Physics", chinese: "物理", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2"]
    },
    hkcee_econ: {
      id: "hkcee_econ", exam: "hkcee",
      name: "Economics", chinese: "經濟學", cat: "Elective",
      papers: ["Paper 1", "Paper 2"]
    },
    hkcee_history: {
      id: "hkcee_history", exam: "hkcee",
      name: "History", chinese: "歷史", cat: "Elective",
      papers: ["Paper 1", "Paper 2"]
    },
    hkcee_geog: {
      id: "hkcee_geog", exam: "hkcee",
      name: "Geography", chinese: "地理", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2"]
    },
    hkcee_commerce: {
      id: "hkcee_commerce", exam: "hkcee",
      name: "Commerce", chinese: "商科", cat: "Elective",
      papers: ["Paper 1", "Paper 2"]
    },
    hkcee_accounts: {
      id: "hkcee_accounts", exam: "hkcee",
      name: "Principles of Accounts", chinese: "會計學原理", cat: "Elective",
      papers: ["Paper 1", "Paper 2"]
    },
    hkcee_chist: {
      id: "hkcee_chist", exam: "hkcee",
      name: "Chinese History", chinese: "中國歷史", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2"]
    },
    hkcee_cit: {
      id: "hkcee_cit", exam: "hkcee",
      name: "Computer & Information Technology", chinese: "電腦與資訊科技", cat: "Elective",
      papers: ["Paper 1 (MC)", "Paper 2"]
    },
    hkcee_inthumans: {
      id: "hkcee_inthumans", exam: "hkcee",
      name: "Integrated Humanities", chinese: "綜合人文學科", cat: "Elective",
      papers: ["Paper 1", "Paper 2"]
    },

    // ── HKAL ──
    hkal_uoe: {
      id: "hkal_uoe", exam: "hkal",
      name: "Use of English", chinese: "英語運用", cat: "Core",
      papers: ["Paper 1 (Reading)", "Paper 2 (Writing)", "Paper 3 (Listening)"]
    },
    hkal_clc: {
      id: "hkal_clc", exam: "hkal",
      name: "Chinese Language & Culture", chinese: "中國語文及文化", cat: "Core",
      papers: ["Paper 1", "Paper 2"]
    },
    hkal_phy: {
      id: "hkal_phy", exam: "hkal",
      name: "Physics", chinese: "物理", cat: "AL",
      papers: ["Paper 1 (MC)", "Paper 2 (Essay)"]
    },
    hkal_chem: {
      id: "hkal_chem", exam: "hkal",
      name: "Chemistry", chinese: "化學", cat: "AL",
      papers: ["Paper 1 (MC)", "Paper 2 (Essay)"]
    },
    hkal_bio: {
      id: "hkal_bio", exam: "hkal",
      name: "Biology", chinese: "生物學", cat: "AL",
      papers: ["Paper 1 (MC)", "Paper 2 (Essay)"]
    },
    hkal_maths: {
      id: "hkal_maths", exam: "hkal",
      name: "Pure Mathematics", chinese: "純數學", cat: "AL",
      papers: ["Paper 1", "Paper 2"]
    },
    hkal_appmaths: {
      id: "hkal_appmaths", exam: "hkal",
      name: "Applied Mathematics", chinese: "應用數學", cat: "AL",
      papers: ["Paper 1", "Paper 2"]
    },
    hkal_econ: {
      id: "hkal_econ", exam: "hkal",
      name: "Economics", chinese: "經濟學", cat: "AL",
      papers: ["Paper 1 (MC)", "Paper 2 (Essay)"]
    },
    hkal_history: {
      id: "hkal_history", exam: "hkal",
      name: "History", chinese: "歷史", cat: "AL",
      papers: ["Paper 1 (Document)", "Paper 2 (Essay)"]
    },
    hkal_chist: {
      id: "hkal_chist", exam: "hkal",
      name: "Chinese History", chinese: "中國歷史", cat: "AL",
      papers: ["Paper 1", "Paper 2"]
    },
    hkal_geog: {
      id: "hkal_geog", exam: "hkal",
      name: "Geography", chinese: "地理", cat: "AL",
      papers: ["Paper 1", "Paper 2"]
    },
    hkal_bizstudies: {
      id: "hkal_bizstudies", exam: "hkal",
      name: "Business Studies", chinese: "商業學", cat: "AL",
      papers: ["Paper 1 (MC)", "Paper 2"]
    },
    hkal_accounts: {
      id: "hkal_accounts", exam: "hkal",
      name: "Principles of Accounts", chinese: "會計學原理", cat: "AL",
      papers: ["Paper 1", "Paper 2"]
    },
    hkal_govt: {
      id: "hkal_govt", exam: "hkal",
      name: "Government & Public Affairs", chinese: "政府與公共事務", cat: "AL",
      papers: ["Paper 1", "Paper 2"]
    }
  },

  // Sample questions per subject — representative style, original content
  questions: {

    // ──── DSE MATHS ────
    dse_maths: {
      2024: {
        "Paper 1": [
          {
            q: 1, marks: 3,
            type: "Short",
            text: "Simplify $\\dfrac{(m^3n^{-2})^4}{m^{-5}n^6}$ and express your answer with positive indices.",
            answer: `**Solution:**

$\\dfrac{(m^3n^{-2})^4}{m^{-5}n^6} = \\dfrac{m^{12}n^{-8}}{m^{-5}n^6}$

$= m^{12-(-5)} \\cdot n^{-8-6}$

$= m^{17}n^{-14}$

$= \\dfrac{m^{17}}{n^{14}}$

**Answer: $\\dfrac{m^{17}}{n^{14}}$**`
          },
          {
            q: 2, marks: 4,
            type: "Short",
            text: "Make $b$ the subject of the formula $a = \\dfrac{3b+2}{b-1}$.",
            answer: `**Solution:**

$a(b-1) = 3b+2$

$ab - a = 3b + 2$

$ab - 3b = 2 + a$

$b(a-3) = a+2$

$b = \\dfrac{a+2}{a-3}$ (where $a \\neq 3$)`
          },
          {
            q: 3, marks: 5,
            type: "Short",
            text: "A sum of $\\$P$ is deposited in a bank at an annual interest rate of 4%, compounded semi-annually. After 3 years, the total amount becomes $\\$8,985.97$. Find the value of $P$.",
            answer: `**Solution:**

Semi-annual rate = $4\\% \\div 2 = 2\\%$

Number of periods = $3 \\times 2 = 6$

Using compound interest formula:

$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$

$8985.97 = P(1+0.02)^6$

$8985.97 = P(1.02)^6$

$8985.97 = P \\times 1.12616...$

$P = \\dfrac{8985.97}{1.12616} \\approx 7980.00$

**Answer: $P = \\$7980$**`
          },
          {
            q: 4, marks: 6,
            type: "Long",
            text: "The mean of the five numbers $3, 7, x, 2x, 15$ is 10. (a) Find $x$. (b) Find the median of these five numbers.",
            answer: `**Solution:**

**(a)** Mean = $\\dfrac{3+7+x+2x+15}{5} = 10$

$25 + 3x = 50$

$3x = 25$

$x = \\dfrac{25}{3} \\approx 8.33$

**(b)** With $x = \\dfrac{25}{3} \\approx 8.33$, $2x \\approx 16.67$

Arranging in order: $3, 7, 8.33, 15, 16.67$

**Median = $\\dfrac{25}{3}$ (the 3rd value)**`
          }
        ],
        "Paper 2": [
          {
            q: 1, marks: 1, type: "MC",
            text: "Which of the following is equal to $3^{-2} \\times 9^3$?",
            options: ["A. $3^4$", "B. $3^5$", "C. $27^4$", "D. $27^1$"],
            answer: `**Answer: A. $3^4$**

$3^{-2} \\times 9^3 = 3^{-2} \\times (3^2)^3 = 3^{-2} \\times 3^6 = 3^{4}$`
          },
          {
            q: 2, marks: 1, type: "MC",
            text: "If $x : y = 2 : 3$ and $y : z = 4 : 5$, then $x : y : z = $",
            options: ["A. 8 : 12 : 15", "B. 2 : 3 : 5", "C. 8 : 6 : 5", "D. 6 : 4 : 5"],
            answer: `**Answer: A. 8 : 12 : 15**

$x:y = 2:3$ and $y:z = 4:5$

Scale $y$ to LCM: $y = 12$

$x = 8$, $y = 12$, $z = 15$

So $x:y:z = 8:12:15$`
          }
        ]
      },
      2022: {
        "Paper 1": [
          {
            q: 1, marks: 3, type: "Short",
            text: "Factorize (a) $4a^2 - 9b^2$, (b) $4a^2 - 9b^2 - 6a + 9b$.",
            answer: `**Solution:**

**(a)** $4a^2 - 9b^2 = (2a)^2 - (3b)^2 = (2a+3b)(2a-3b)$

**(b)** $4a^2 - 9b^2 - 6a + 9b$

$= (2a+3b)(2a-3b) - 3(2a-3b)$

$= (2a-3b)(2a+3b-3)$`
          }
        ]
      }
    },

    // ──── DSE ENGLISH ────
    dse_english: {
      2024: {
        "Paper 2 (Writing)": [
          {
            q: 1, marks: 16, type: "Essay",
            text: `**Question 1 – Compulsory**

You are a student representative. Write a **speech** (300–360 words) to be delivered at your school's annual prize-giving ceremony. Your speech should:
- Welcome and thank the guests
- Highlight two achievements of the school in the past year
- Encourage students to face future challenges`,
            answer: `**Model Answer (Band 5 Level)**

---

Good evening, Principal Lee, distinguished guests, teachers, parents, and fellow students.

It is my great honour to stand before you today as your student representative at our annual prize-giving ceremony. On behalf of the entire student body, I would like to extend our warmest welcome to all our guests and our sincere gratitude for taking the precious time to join us this evening.

Looking back at the past year, our school has achieved remarkable milestones that we should all be proud of. Firstly, our school's football team clinched the championship at the Inter-School Football Competition for the very first time in our history. This victory was the result of months of dedicated training, teamwork, and perseverance — qualities that reflect the very best of our school spirit. Secondly, our STEM programme produced outstanding results, with three of our students winning gold medals at the Regional Science Olympiad. Their success demonstrates that when curiosity meets hard work, anything is possible.

As we celebrate these achievements, we must also look ahead. The world is changing at an unprecedented pace, with new technologies and global challenges reshaping our future every day. My message to every student here tonight is simple: do not be afraid to step outside your comfort zone. Embrace every challenge as an opportunity to grow, and never let the fear of failure stop you from trying.

I would also like to remind all of us that success is not measured solely by academic results or trophies. The compassion we show, the friendships we build, and the positive impact we make in our communities matter just as much.

Let us carry forward the achievements of this year as inspiration, and face the challenges ahead with courage and confidence.

Thank you.

---

**Marking Notes:**
- Appropriate tone and register for a formal speech ✓
- Clear structure with opening, body, conclusion ✓
- Accurate grammar and varied vocabulary ✓
- Addresses all three bullet points ✓`
          },
          {
            q: 2, marks: 16, type: "Essay",
            text: `**Question 2B – Argumentative Essay**

Write an argumentative essay (300–360 words) in response to the following question:

*"Social media does more harm than good to teenagers. Do you agree?"*

Present a clear argument with supporting points and a conclusion.`,
            answer: `**Model Answer (Band 5 Level)**

---

**Social Media: A Double-Edged Sword for Teenagers**

In today's digitally connected world, social media has become an indispensable part of teenage life. While some argue that it is largely harmful, I believe that when used responsibly, social media offers more benefits than drawbacks to teenagers.

To begin with, social media is a powerful tool for communication and connection. Teenagers can maintain friendships across geographical boundaries, collaborate on school projects through shared platforms, and even build meaningful support networks with peers who share similar experiences. For students who struggle with face-to-face social interaction, online communities can provide a safe space to express themselves.

Furthermore, social media opens doors to educational and career opportunities. Many young people use platforms like YouTube and LinkedIn to learn new skills, discover career paths, and follow inspiring content creators. Exposure to global perspectives broadens teenagers' worldviews in ways that traditional education alone cannot achieve.

Admittedly, there are genuine risks associated with social media use. Cyberbullying, exposure to inappropriate content, and the pressure to conform to unrealistic beauty standards are real concerns. Research has also linked excessive screen time to sleep deprivation and reduced academic performance.

However, these harms are not inevitable — they are largely the result of unguided, excessive use. With proper digital literacy education and parental guidance, teenagers can learn to navigate social media in a healthy, balanced way.

In conclusion, the issue lies not in social media itself but in how it is used. Rather than banning it outright, society should focus on equipping teenagers with the critical thinking skills needed to be responsible digital citizens. Used wisely, social media is an asset, not a threat.

---
*Word count: ~300 | Register: Formal | Argument: Clearly structured with counterargument acknowledged*`
          }
        ],
        "Paper 1 (Reading)": [
          {
            q: 1, marks: 4, type: "Comprehension",
            text: `**Read the following passage and answer questions 1–5.**

*(Sample passage — representative of HKDSE Reading Paper style)*

**The Science of Sleep**

Modern life has declared war on sleep. With smartphones glowing in the dark, deadlines looming, and endless entertainment at our fingertips, a full eight hours of rest has become something of a luxury. Yet science is increasingly clear: sleep is not a passive shutdown. It is, in fact, one of the most critical periods of biological activity your body undergoes.

During deep sleep, the brain performs what researchers describe as a "filing system reset". Memories formed during the day are consolidated and stored, while neural pathways are strengthened. Studies from the University of California found that students who slept for eight hours before an exam outperformed those who stayed up studying by an average of 40%. The lesson? Revision is only half the equation.

The body, too, uses sleep as repair time. Growth hormone is released in greatest quantities during deep sleep stages, rebuilding muscle tissue and supporting immune function. For teenagers, who are still physically developing, this makes a full night's sleep especially critical.

**Question 1:** According to the passage, what does the brain do during deep sleep? Give TWO details. (4 marks)`,
            answer: `**Model Answer:**

According to the passage, during deep sleep the brain:

1. **Consolidates and stores memories** formed during the day — it performs a "filing system reset" to organise information.

2. **Strengthens neural pathways**, which improves learning retention and cognitive performance.

*(1 mark per correct point, up to 2 marks each for detail/elaboration)*`
          }
        ]
      },
      2018: {
        "Paper 2 (Writing)": [
          {
            q: 1, marks: 16, type: "Essay",
            text: `Write a **letter to the editor** (300–360 words) responding to a recent article claiming that homework should be abolished in Hong Kong secondary schools. Express your view clearly and provide reasons.`,
            answer: `**Model Answer**

---

Dear Editor,

I am writing in response to the article published on 12th March suggesting that homework should be abolished in Hong Kong secondary schools. While I understand the intention behind this proposal, I respectfully disagree.

Homework serves as an essential bridge between classroom learning and independent thinking. When students revisit concepts at home, they consolidate understanding and identify areas where they need further support. Without this daily revision, much of what is taught in class is quickly forgotten.

Moreover, homework cultivates discipline and time-management skills that are vital for success in higher education and the workplace. Learning to meet deadlines and manage one's own study schedule are life skills that cannot be acquired in the classroom alone.

That said, I acknowledge that excessive homework can contribute to stress and leave students with insufficient time for rest and extracurricular activities. The solution, however, is not abolition but reform. Schools should set purposeful, quality homework rather than repetitive tasks, and ensure the total daily workload remains manageable.

I call upon the Education Bureau and school principals to review homework policies with input from students, parents, and educators. A balanced approach will preserve the educational benefits of homework while protecting students' wellbeing.

Yours faithfully,
A Concerned Student

---
*Register: Formal letter | Tone: Respectful, persuasive | Structure: Introduction → 2 supporting points → counterargument acknowledged → solution → conclusion*`
          }
        ]
      }
    },

    // ──── DSE BIOLOGY ────
    dse_bio: {
      2024: {
        "Paper 2 (Structured & Essay)": [
          {
            q: 1, marks: 8, type: "Structured",
            text: `The diagram shows a simplified cross-section of the human heart.

(a) Name the chambers labelled A and B in the diagram. (2 marks)
(b) Explain why the wall of the left ventricle is thicker than that of the right ventricle. (3 marks)
(c) Describe the role of the bicuspid valve. (3 marks)`,
            answer: `**Model Answer:**

**(a)**
- Chamber A: Right atrium (右心房)
- Chamber B: Left ventricle (左心室)

**(b)** The left ventricle pumps oxygenated blood into the **aorta** and around the entire systemic circulation (all organs of the body), which requires **much greater pressure** than pulmonary circulation. The right ventricle only pumps deoxygenated blood to the nearby lungs. Therefore, the left ventricular wall must be **thicker and more muscular** to generate sufficient force to maintain adequate blood pressure throughout the body.

**(c)** The bicuspid valve (mitral valve) is located between the **left atrium and left ventricle**. Its role is to:
- Allow blood to flow **from the left atrium into the left ventricle** during diastole (relaxation)
- **Prevent backflow** of blood from the left ventricle into the left atrium during systole (contraction)

This ensures **unidirectional blood flow** through the heart, maintaining efficient circulation.`
          },
          {
            q: 2, marks: 12, type: "Essay",
            text: `Explain how the human body responds to a sudden decrease in blood glucose level after prolonged exercise. Your answer should include the roles of specific hormones and organs involved. (12 marks)`,
            answer: `**Model Answer:**

**Detection of Low Blood Glucose:**
Blood glucose falls below the set point (~4.5 mmol/L). **Alpha cells in the islets of Langerhans** in the pancreas detect this decrease.

**Hormonal Response:**
1. **Glucagon** is secreted by alpha cells into the bloodstream.

**Target Organ — Liver:**
Glucagon acts on the liver to:
- Stimulate **glycogenolysis** — the breakdown of glycogen stores into glucose
- Promote **gluconeogenesis** — synthesis of new glucose from amino acids and glycerol
- Inhibit glycogen synthesis

Glucose is then released into the blood, raising blood glucose back to normal levels.

**Secondary Response — Adrenaline:**
During prolonged exercise, the adrenal medulla also releases **adrenaline**, which:
- Reinforces glycogenolysis in the liver
- Stimulates glycogen breakdown in **muscle cells** to provide energy locally

**Negative Feedback:**
Once blood glucose returns to the set point, alpha cells reduce glucagon secretion, stopping further glucose release. This constitutes a **negative feedback loop** that maintains homeostasis.

**Other Considerations:**
- The hypothalamus and pituitary may also release signals that stimulate cortisol release (from adrenal cortex), which supports gluconeogenesis over longer periods.

*Marking points: alpha cells (1), glucagon named (1), liver as target (1), glycogenolysis (2), gluconeogenesis (2), adrenaline (1), adrenal medulla (1), negative feedback concept (2), homeostasis term (1)*`
          }
        ]
      }
    },

    // ──── DSE CHEMISTRY ────
    dse_chem: {
      2024: {
        "Paper 2 (Structured & Essay)": [
          {
            q: 1, marks: 7, type: "Structured",
            text: `Iron ore is reduced in a blast furnace to produce iron. The table shows the main raw materials added to a blast furnace.

| Raw Material | Purpose |
|---|---|
| Iron ore (haematite, Fe₂O₃) | Source of iron |
| Coke (C) | Fuel and reducing agent |
| Limestone (CaCO₃) | Removes acidic impurities |

(a) Write a balanced chemical equation for the reduction of Fe₂O₃ by CO in the blast furnace. (2 marks)
(b) Explain how limestone removes silicon dioxide (SiO₂) impurities. Write a balanced equation. (3 marks)
(c) The iron produced in a blast furnace is called pig iron and contains about 4% carbon. Explain why this makes pig iron brittle. (2 marks)`,
            answer: `**Model Answer:**

**(a)** Balanced equation:
$$Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$$

*(1 mark for correct reactants/products, 1 mark for balancing)*

**(b)** Limestone decomposes at high temperatures:
$$CaCO_3 \\rightarrow CaO + CO_2$$

Calcium oxide (CaO) is a **basic oxide** that reacts with the acidic oxide SiO₂:
$$CaO + SiO_2 \\rightarrow CaSiO_3$$

Calcium silicate (CaSiO₃) forms a **molten slag** that floats on liquid iron and is tapped off separately.

**(c)** Carbon atoms occupy positions between the **iron atoms in the crystal lattice**, disrupting the regular arrangement. This prevents layers of iron atoms from sliding past each other easily. When stress is applied, the irregular structure **cracks rather than deforms**, making pig iron brittle.`
          }
        ]
      }
    },

    // ──── DSE ECONOMICS ────
    dse_econ: {
      2024: {
        "Paper 2 (Data Response & Essay)": [
          {
            q: 1, marks: 10, type: "Data Response",
            text: `**Data Response Question**

The following data relates to Hong Kong's housing market (hypothetical figures for illustration):

- Average private residential property price: HK$12,000/sq ft (2020), HK$10,500/sq ft (2023)
- Number of new private housing completions: 15,000 units (2020), 22,000 units (2023)
- Mortgage interest rate: 1.5% (2020), 4.2% (2023)

(a) Using demand and supply analysis, explain the fall in average property prices from 2020 to 2023. (6 marks)
(b) Explain TWO possible effects of falling property prices on the Hong Kong economy. (4 marks)`,
            answer: `**Model Answer:**

**(a) Demand & Supply Analysis:**

**Supply side (↑ Supply):**
The number of new housing completions rose from 15,000 to 22,000 units, shifting the **supply curve to the right** (S→S₁). At any given price, more units are available, putting **downward pressure on prices**.

**Demand side (↓ Demand):**
The sharp rise in mortgage interest rates from 1.5% to 4.2% significantly increased the **cost of borrowing** to purchase property. This made home ownership less affordable, causing the **demand curve to shift to the left** (D→D₁). Potential buyers either delayed purchases or reduced their budget.

**Combined effect:**
Both the rightward shift in supply and the leftward shift in demand result in a **lower equilibrium price**, consistent with the observed fall from HK$12,000 to HK$10,500 per sq ft. The effect on equilibrium quantity is ambiguous and depends on the relative magnitudes of the shifts.

**(b) Two Effects on the Economy:**

1. **Negative wealth effect / reduced consumer spending:** Homeowners experience a decline in the value of their assets (their property). Feeling less wealthy, they may **reduce consumption expenditure**, leading to a fall in aggregate demand and potentially slowing economic growth.

2. **Increased housing affordability for first-time buyers:** Lower prices and reduced barriers to homeownership may allow more first-time buyers to enter the market, reducing inequality in housing access and **stimulating related industries** (furniture, renovation, banking).`
          }
        ]
      }
    },

    // ──── DSE PHYSICS ────
    dse_phy: {
      2024: {
        "Paper 2 (Structured & Essay)": [
          {
            q: 1, marks: 8, type: "Structured",
            text: `A car of mass 1200 kg is travelling at 20 m/s. The driver applies the brakes, and the car comes to rest in 5 seconds.

(a) Calculate the deceleration of the car. (2 marks)
(b) Calculate the braking force applied. (2 marks)
(c) Calculate the kinetic energy lost during braking. (2 marks)
(d) Where does the kinetic energy go? (2 marks)`,
            answer: `**Model Answer:**

**(a)** Using $v = u + at$:

$0 = 20 + a(5)$

$a = -4 \\text{ m/s}^2$

Deceleration = **4 m/s²**

**(b)** $F = ma = 1200 \\times 4 = $ **4800 N**

**(c)** $KE = \\dfrac{1}{2}mv^2 = \\dfrac{1}{2}(1200)(20)^2 = 240{,}000 \\text{ J} = $ **240 kJ**

(Final KE = 0, so KE lost = 240 kJ)

**(d)** The kinetic energy is converted into **thermal/heat energy** due to friction between the brake pads and the wheel discs, and between the tyres and the road surface. A small amount is also converted to **sound energy**.`
          }
        ]
      }
    },

    // ──── HKCEE MATHS ────
    hkcee_maths: {
      2010: {
        "Paper 1": [
          {
            q: 1, marks: 3, type: "Short",
            text: "Simplify $\\dfrac{a^2 - 4}{a^2 - a - 2}$.",
            answer: `**Solution:**

Numerator: $a^2 - 4 = (a+2)(a-2)$

Denominator: $a^2 - a - 2 = (a-2)(a+1)$

$$\\frac{(a+2)(a-2)}{(a-2)(a+1)} = \\frac{a+2}{a+1}$$

**Answer: $\\dfrac{a+2}{a+1}$** (where $a \\neq 2$ and $a \\neq -1$)`
          },
          {
            q: 2, marks: 4, type: "Short",
            text: "The marked price of a watch is $\\$800$. It is sold at a discount of 20%, but still makes a profit of 28% on the cost price. Find the cost price.",
            answer: `**Solution:**

Selling price = $800 \\times (1 - 20\\%) = 800 \\times 0.8 = \\$640$

Let cost price = $C$

$C(1 + 28\\%) = 640$

$1.28C = 640$

$C = \\dfrac{640}{1.28} = \\$500$

**Answer: Cost price = $\\$500$**`
          },
          {
            q: 3, marks: 5, type: "Short",
            text: "In a class of 30 students, 18 play football, 15 play basketball, and 5 play neither. Find the number of students who play both football and basketball.",
            answer: `**Solution:**

Students who play at least one sport = $30 - 5 = 25$

By inclusion-exclusion principle:

$|F \\cup B| = |F| + |B| - |F \\cap B|$

$25 = 18 + 15 - |F \\cap B|$

$|F \\cap B| = 33 - 25 = 8$

**Answer: 8 students play both sports.**`
          }
        ],
        "Paper 2 (MC)": [
          {
            q: 1, marks: 1, type: "MC",
            text: "If $2^x = 5$, then $2^{x+2} = $",
            options: ["A. 7", "B. 10", "C. 20", "D. 25"],
            answer: `**Answer: C. 20**

$2^{x+2} = 2^x \\cdot 2^2 = 5 \\times 4 = 20$`
          }
        ]
      },
      2005: {
        "Paper 1": [
          {
            q: 1, marks: 4, type: "Short",
            text: "Solve the simultaneous equations: $3x + 2y = 16$ and $x - y = 2$.",
            answer: `**Solution:**

From the second equation: $x = y + 2$

Substituting into the first equation:

$3(y+2) + 2y = 16$

$3y + 6 + 2y = 16$

$5y = 10$

$y = 2$

$x = y + 2 = 4$

**Answer: $x = 4$, $y = 2$**`
          }
        ]
      }
    },

    // ──── HKCEE ENGLISH ────
    hkcee_english: {
      2010: {
        "Paper 2 (Composition)": [
          {
            q: 1, marks: 30, type: "Essay",
            text: `Write a composition of about 200 words on ONE of the following topics:

**Topic A:** Write a story that ends with the words: *"...and I realised I had never been so wrong in my life."*

**Topic B:** Write a letter to your friend who has just moved to another city, telling him/her about a recent event in your school.`,
            answer: `**Model Answer — Topic A**

The school laboratory was dead silent as I counted the votes for Class President. Forty-two slips of paper, neatly folded, waited to be opened.

I had been so certain that Jason would win. He was clever, popular, and had given what everyone agreed was the best speech. My friend Mei, who had nervously delivered a quiet, stumbling presentation about improving the school canteen, had barely seemed confident. I had already written her off.

One by one, I unfolded each ballot. The room seemed to tilt.

Twenty-six votes for Mei.

Sixteen for Jason.

The class erupted in applause. Mei stood there, speechless, tears forming in her eyes. Later, students told me that her honesty had moved them. She had admitted her flaws openly and promised to try her best regardless. No rehearsed promises. No clever slogans.

As I handed Mei the results, and she looked at me with that quiet smile, I realised I had never been so wrong in my life.

---
*Word count: ~190 | Narrative structure: clear setup, turning point, reflection | Vocabulary: varied and appropriate*`
          }
        ]
      }
    },

    // ──── HKCEE BIOLOGY ────
    hkcee_bio: {
      2008: {
        "Paper 2": [
          {
            q: 1, marks: 8, type: "Structured",
            text: `(a) State THREE differences between aerobic respiration and anaerobic respiration in mammals. (3 marks)
(b) During intense exercise, lactic acid accumulates in muscles. Explain what happens to this lactic acid after exercise stops. (3 marks)
(c) Why do athletes breathe heavily even after they stop exercising? (2 marks)`,
            answer: `**Model Answer:**

**(a) Three differences:**

| Aerobic Respiration | Anaerobic Respiration |
|---|---|
| Requires oxygen | Does not require oxygen |
| Produces CO₂ and H₂O | Produces lactic acid (in mammals) |
| Releases 38 ATP per glucose molecule | Releases only 2 ATP per glucose molecule |

**(b)** After exercise, increased oxygen intake (the **oxygen debt** repayment) allows:
- Lactic acid to be **transported to the liver via the bloodstream**
- In the liver, lactic acid is **converted back to glucose** (gluconeogenesis) or oxidised directly to CO₂ and water
- The glucose may be stored as **glycogen** in the liver or muscles

**(c)** After exercise, athletes continue to breathe heavily to repay the **oxygen debt** — the additional oxygen required to:
- Oxidise accumulated lactic acid
- Restore ATP and creatine phosphate stores depleted during exercise
- Return the body to its pre-exercise homeostatic state`
          }
        ]
      }
    },

    // ──── HKAL USE OF ENGLISH ────
    hkal_uoe: {
      2010: {
        "Paper 2 (Writing)": [
          {
            q: 1, marks: 25, type: "Essay",
            text: `Write an essay of about 400 words on ONE of the following topics:

**Topic 1:** "Economic development should always take priority over environmental protection." Discuss.

**Topic 2:** Technology has made the world a smaller place, but has it made people lonelier? Give your views.`,
            answer: `**Model Answer — Topic 1**

**Economic Development vs. Environmental Protection: A False Dilemma**

The claim that economic development must always take precedence over environmental protection reflects a dangerously outdated mindset — one that treats prosperity and sustainability as mutually exclusive. In reality, no meaningful long-term economic development is possible on a degraded planet.

It is true that developing nations face an acute dilemma. Countries where millions live in poverty cannot be expected to forego industrial growth in the name of ecology. Historically, today's wealthy nations industrialised with little regard for environmental consequences, and it would be hypocritical to demand that poorer nations sacrifice their development to clean up a crisis they did little to create. In this sense, short-term prioritisation of economic growth can be morally justified.

However, the argument collapses when extended to its logical conclusion. An economy depends entirely on the natural systems it exploits. Deforestation may generate timber revenue today, but it destroys water catchment systems, accelerates soil erosion, and reduces agricultural productivity for generations. The economic cost of environmental degradation — in healthcare, disaster response, and lost ecosystem services — invariably outweighs short-term gains.

The concept of **sustainable development**, as articulated in the Brundtland Report of 1987, offers a more constructive framework: meeting the needs of the present without compromising the ability of future generations to meet their own needs. Nations like Denmark and Germany have demonstrated that investment in renewable energy and green technology can simultaneously stimulate economic growth and reduce carbon emissions.

Furthermore, technological innovation driven by environmental necessity — from electric vehicles to plant-based proteins — is now among the fastest-growing sectors in the global economy. The green economy is not a constraint; it is a frontier.

In conclusion, framing the debate as an either/or choice is both intellectually dishonest and practically harmful. Economic development and environmental stewardship are complementary goals. The real question is not which to prioritise, but how to pursue both wisely.

---
*Word count: ~310 | Band 5 indicator: clear thesis, logical development, counterargument engaged, nuanced conclusion, formal register*`
          }
        ]
      }
    },

    // ──── HKAL ECONOMICS ────
    hkal_econ: {
      2008: {
        "Paper 2 (Essay)": [
          {
            q: 1, marks: 25, type: "Essay",
            text: `With reference to economic theory, explain how a monopolist determines its profit-maximising level of output and price. Compare this outcome with perfect competition and comment on the welfare implications.`,
            answer: `**Model Answer:**

**Monopolist Profit Maximisation:**

A monopolist faces a **downward-sloping demand curve** (it is the sole supplier), which means its **marginal revenue (MR) is always below price (P)**. The monopolist maximises profit by producing where **MR = MC** (marginal cost).

To find the price, the monopolist reads up to the demand curve from the profit-maximising output ($Q_m$), yielding price $P_m$. Since $P_m > MC$, the monopolist earns **supernormal (economic) profit** equal to $(P_m - ATC) \\times Q_m$, assuming $P_m > ATC$.

**Comparison with Perfect Competition:**

Under perfect competition, in the long run:
- Price = MC = Minimum ATC (zero economic profit)
- Output is at the allocatively efficient level where $P = MC$

Under monopoly:
- $P_m > MC$ → **allocative inefficiency** (deadweight welfare loss)
- Output $Q_m < Q_c$ (competitive output) → **productive inefficiency** if not at minimum ATC

**Welfare Analysis:**

The monopoly outcome creates a **deadweight loss triangle** — representing consumer and producer surplus that is destroyed and not transferred to anyone. Consumer surplus is also partly transferred to the monopolist as profit.

**However, counterarguments exist:**
1. **Economies of scale**: A natural monopoly may produce at lower average cost than many small competitive firms, potentially charging a lower price despite monopoly status.
2. **R&D incentives**: Supernormal profits may fund innovation (Schumpeter's "creative destruction"), benefiting consumers long-term.
3. **Regulation**: Governments can impose price controls at $P = MC$ or $P = ATC$ to improve welfare while preserving the firm's existence.

**Conclusion:** Unregulated monopoly is generally welfare-inferior to perfect competition due to deadweight loss and redistribution from consumers to producers. However, the appropriate policy response depends on the specific market structure and cost characteristics of the industry.`
          }
        ]
      }
    },

    // ──── HKCEE CHEMISTRY ────
    hkcee_chem: {
      2009: {
        "Paper 2": [
          {
            q: 1, marks: 6, type: "Structured",
            text: `Copper can be extracted from copper(II) oxide (CuO) by reduction with hydrogen gas.

(a) Write a balanced chemical equation for this reaction. (2 marks)
(b) Describe how you would carry out this experiment safely in the laboratory, including the correct order of steps. (4 marks)`,
            answer: `**Model Answer:**

**(a)** Balanced equation:
$$CuO_{(s)} + H_{2(g)} \\rightarrow Cu_{(s)} + H_2O_{(g)}$$

*(1 mark for correct equation, 1 mark for correct state symbols or balancing)*

**(b)** **Safe Laboratory Procedure:**

**Step 1:** Set up the apparatus — place CuO powder in a porcelain boat inside a combustion tube connected to a hydrogen supply and fume cupboard. Ensure all connections are tight.

**Step 2:** **Pass hydrogen gas through the apparatus for at least 1–2 minutes before heating** — this displaces all air from the tube and prevents the formation of a flammable hydrogen-air mixture, which could cause an explosion.

**Step 3:** Light the Bunsen burner and heat the CuO gently, then more strongly. The black CuO will gradually turn to **pink/copper-coloured Cu**, and water droplets will condense near the exit.

**Step 4:** When the reaction is complete, **stop heating first**, then **continue passing hydrogen over the copper until the tube cools to room temperature**. This prevents the hot copper from re-oxidising in air.

**Safety note:** Carry out in a well-ventilated fume cupboard. Hydrogen is flammable — keep away from open flames.`
          }
        ]
      }
    }

  } // end questions
};

// Helper functions
function getExams() { return Object.values(DB.exams); }
function getSubjectsForExam(examId) { return Object.values(DB.subjects).filter(s => s.exam === examId); }
function getYearsForSubject(subjectId) {
  const qs = DB.questions[subjectId];
  if (!qs) return [];
  return Object.keys(qs).map(Number).sort((a,b) => a-b);
}
function getPapersForSubjectYear(subjectId, year) {
  const qs = DB.questions[subjectId];
  if (!qs || !qs[year]) return [];
  return Object.keys(qs[year]);
}
function getQuestions(subjectId, year, paper) {
  const qs = DB.questions[subjectId];
  if (!qs || !qs[year] || !qs[year][paper]) return [];
  return qs[year][paper];
}
function getAllSubjectYears(examId) {
  const subjects = getSubjectsForExam(examId);
  const result = {};
  subjects.forEach(s => {
    result[s.id] = getYearsForSubject(s.id);
  });
  return result;
}
