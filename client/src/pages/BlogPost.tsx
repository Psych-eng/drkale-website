export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  publishedDate: string;
  readingTimeMinutes: number;
  audience: string[];
  tags: string[];
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-independent-psychiatric-evaluations-prevent-due-process-hearings",
    title: "How Independent Psychiatric Evaluations Help Connecticut School Districts Prevent Due Process Hearings",
    metaDescription:
      "Learn how an independent psychiatric evaluation provides the legally defensible clinical foundation Connecticut school districts need to prevent costly due process hearings and strengthen IEPs.",
    publishedDate: "2026-02-24",
    readingTimeMinutes: 6,
    audience: ["Special Education Directors", "School Psychologists"],
    tags: ["Due Process", "IEP", "Legal Risk", "Connecticut", "Special Education"],
    excerpt:
      "Due process hearings are one of the most costly, time-consuming, and stressful events a school district can face. While they cannot always be avoided, a large percentage of them stem from a single underlying problem: an IEP that lacks a clinically rigorous, independently documented foundation for its decisions.",
    content: `
<p>Due process hearings are one of the most costly, time-consuming, and stressful events a school district can face. Attorney fees, staff time, expert witnesses, and the possibility of an adverse decision — the stakes are high on every front. While hearings cannot always be avoided, a large percentage of them stem from a single underlying problem: an Individualized Education Program that lacks a clinically rigorous, independently documented foundation for its decisions.</p>

<p>This is where an independent psychiatric evaluation becomes one of the most strategically valuable tools available to a Special Education Director.</p>

<h2>Why IEPs Get Challenged</h2>

<p>Parents and their attorneys challenge IEPs most commonly for one of three reasons. First, the evaluation data used to develop the plan is outdated, incomplete, or does not adequately address the student's psychiatric presentation. Second, the services and placement decisions appear unsupported by the clinical evidence in the record. Third, the team cannot demonstrate that it considered and ruled out more intensive levels of support.</p>

<p>All three of these vulnerabilities are directly addressed by a comprehensive, independent psychiatric evaluation. When a board-certified child and adolescent psychiatrist conducts a thorough assessment — reviewing records, meeting with the student and family, administering standardized measures, and producing a detailed written report — the IEP team has a defensible clinical anchor for every significant decision it makes.</p>

<h2>What "Legally Defensible" Actually Means</h2>

<p>In the context of special education, a legally defensible decision is one that can be explained, documented, and justified based on objective clinical evidence. It does not mean that no one will ever disagree with the decision. It means that when the decision is scrutinized — whether in a due process hearing, a state complaint, or a compliance review — there is a clear, documented clinical rationale that a reasonable person would find credible and thorough.</p>

<p>An independent psychiatric evaluation contributes to that standard in several concrete ways. It provides a formal diagnosis or differential diagnosis from a licensed physician, which carries significant weight when the appropriateness of a placement or service is disputed. It documents the student's functional impairments in educational settings, which directly supports the development of measurable IEP goals. And it provides treatment and accommodation recommendations from an expert who has no institutional interest in minimizing services — a factor that carries weight when hearing officers assess whether a district acted in good faith.</p>

<h2>The "Independent" Component Matters More Than Many Districts Realize</h2>

<p>Connecticut school districts employ talented and highly credentialed psychologists who conduct thorough evaluations. However, when a dispute escalates, the independence of the evaluator becomes a significant factor. A hearing officer or mediator will naturally consider whether the evaluator has an organizational relationship with the district that might influence findings or recommendations.</p>

<p>An independent evaluation — one conducted by a clinician who has no contractual or employment relationship with the district — eliminates that concern entirely. It signals that the district was genuinely seeking the most accurate clinical picture, not simply generating documentation to support a predetermined outcome. This posture of clinical honesty is one of the most effective trust-building tools a district can use with families, and it often resolves disputes before they reach the hearing stage.</p>

<h2>When to Request an Independent Psychiatric Evaluation</h2>

<p>The clearest indicators that an independent psychiatric evaluation would strengthen a district's position include situations where a student has a complex or unresolved psychiatric presentation that the existing evaluation data does not fully explain; where the student has a history of placement instability or repeated IEP revisions without clear clinical rationale; where the family has expressed concerns about the adequacy of the current evaluation or disagreement with the team's conclusions; where the district is considering a more restrictive placement and needs clinical documentation to justify that level of service; or where a student has engaged in behaviors that raise safety concerns and require a formal psychiatric risk assessment.</p>

<p>In any of these scenarios, the cost of an independent evaluation is modest compared to the cost of a due process proceeding that could have been avoided.</p>

<h2>A Practical Example</h2>

<p>Consider a student whose IEP team is recommending a therapeutic day program following a period of significant behavioral escalation. The family is resistant, believing that the student's needs can be met in the current placement with additional supports. Without an independent psychiatric evaluation, the district's position rests primarily on behavioral data, staff observations, and the school psychologist's assessment — all of which the family may characterize as biased toward a more restrictive placement.</p>

<p>With an independent psychiatric evaluation in the record, the team's recommendation is supported by the clinical judgment of a board-certified child and adolescent psychiatrist who has independently assessed the student, reviewed all available records, and reached conclusions about the level of support the student's psychiatric condition requires. That changes the conversation entirely — and frequently prevents it from ever reaching a hearing officer.</p>

<h2>The Bottom Line</h2>

<p>Due process prevention is not primarily a legal strategy. It is a clinical quality strategy. When a district consistently ensures that its most complex students have thorough, independent psychiatric evaluations in their records, it builds IEPs on a foundation that is far more difficult to challenge — and far more likely to result in genuine benefit for the student.</p>

<p>If your district is navigating a complex case or preparing for an IEP revision that you anticipate may be contested, I am available to discuss whether an independent psychiatric evaluation would be appropriate and how the process works.</p>
    `,
  },
  {
    slug: "what-a-psychiatric-evaluation-includes-guide-for-special-education-teams",
    title: "What a Psychiatric Evaluation Actually Includes: A Guide for Special Education Teams",
    metaDescription:
      "A practical guide for Connecticut Special Education Directors and school psychologists explaining what a comprehensive child psychiatric evaluation includes and how the findings support IEP development.",
    publishedDate: "2026-03-10",
    readingTimeMinutes: 7,
    audience: ["Special Education Directors", "School Psychologists"],
    tags: ["Psychiatric Evaluation", "IEP", "Special Education", "Connecticut", "School Psychologists"],
    excerpt:
      "When a school district requests an independent psychiatric evaluation, the special education team often receives the final report without a clear understanding of how it was produced. That gap matters — because the more a team understands what went into the evaluation, the more effectively they can use the findings to build an appropriate Individualized Education Program.",
    content: `
<p>When a school district requests an independent psychiatric evaluation, the special education team often receives the final report without a clear understanding of how it was produced or what clinical process stands behind the conclusions. That gap matters — because the more a team understands what went into the evaluation, the more effectively they can use the findings to build an appropriate Individualized Education Program.</p>

<p>This article walks through what a comprehensive child and adolescent psychiatric evaluation actually includes, from the first contact through the final report.</p>

<h2>It Begins Before the Appointment</h2>

<p>A thorough psychiatric evaluation starts with a careful review of existing records before the clinician ever meets the student. These records typically include prior psychological and educational evaluations, school records and report cards, behavioral incident logs, previous Individualized Education Programs and progress notes, any prior mental health treatment records that have been released, and medical records when relevant.</p>

<p>This record review serves an important function. It allows the evaluating psychiatrist to understand the student's history in context, identify patterns that may not be apparent from a single encounter, and formulate specific hypotheses to explore during the clinical interview. A psychiatrist who arrives at an evaluation without having reviewed records is working with a significant blind spot.</p>

<h2>The Clinical Interview with the Student</h2>

<p>The centerpiece of any psychiatric evaluation is a direct clinical interview with the student. For children and adolescents, the interview is adapted to the student's developmental level and communication style. It is not a rigid questionnaire — it is a clinical conversation designed to elicit information that standardized tools alone cannot capture.</p>

<p>During the interview, a child and adolescent psychiatrist will explore the student's mood, thought content and thought process, perceptual experiences, insight and judgment, cognitive functioning as observed in conversation, the student's own understanding of their difficulties, and their goals, fears, and relationships. The psychiatrist is simultaneously observing the student's behavior, affect, eye contact, motor activity, and the coherence of their responses — all of which constitute what is formally called the mental status examination.</p>

<p>For students who have difficulty with verbal communication, the interview is adapted accordingly, and greater weight is placed on behavioral observation and collateral information.</p>

<h2>The Parent and Caregiver Interview</h2>

<p>A psychiatric evaluation of a child or adolescent always includes a substantive interview with parents or primary caregivers. This is not a courtesy — it is a clinical necessity. Parents provide a developmental history that cannot be obtained any other way, including pregnancy and birth history, early developmental milestones, the onset and progression of symptoms, family psychiatric history, and their observations of the child across settings and over time.</p>

<p>The parent interview also gives the evaluating psychiatrist a direct sense of the family system, which is clinically relevant in virtually every case involving a child or adolescent.</p>

<h2>Collateral Information from School</h2>

<p>In a school-based evaluation, the psychiatrist will typically request input from teachers, school psychologists, counselors, or other staff who know the student. This may come in the form of standardized rating scales — such as the Conners, the BASC, or the Achenbach — completed independently by both parents and teachers, allowing the evaluator to compare how the student presents across home and school settings. Discrepancies between home and school ratings are themselves clinically meaningful.</p>

<p>Direct communication with school staff, when appropriate and consented to, can also provide context that written records do not capture.</p>

<h2>Psychological and Psychiatric Measures</h2>

<p>Depending on the clinical questions being addressed, the evaluation may include structured or semi-structured diagnostic interviews, symptom rating scales specific to depression, anxiety, attention, trauma, or psychosis, and cognitive screening measures. It is important to note that a psychiatric evaluation is not the same as a neuropsychological or psychoeducational evaluation — the psychiatrist is not primarily administering lengthy cognitive batteries. The focus is on psychiatric diagnosis and its functional implications, not on measuring intellectual ability or academic achievement specifically. These are complementary, not competing, evaluations.</p>

<h2>The Written Report</h2>

<p>The evaluation concludes with a written report that synthesizes all of the above into a coherent clinical narrative. A well-written psychiatric evaluation report includes a summary of records reviewed, developmental and psychiatric history, mental status findings, diagnostic impressions with clinical reasoning, and recommendations.</p>

<p>The recommendations section is where the report becomes most directly useful to the special education team. Good psychiatric recommendations address the student's educational environment and supports, behavioral interventions grounded in the student's diagnosis, therapeutic services and their appropriate intensity, medication considerations when relevant, and any safety concerns that require immediate attention.</p>

<h2>How the Report Connects to the Individualized Education Program</h2>

<p>The psychiatric evaluation report does not write the Individualized Education Program — that remains the team's responsibility. What it does is provide the clinical foundation that the team's decisions can rest on. When a team is determining eligibility under an emotional disturbance category, establishing the need for a therapeutic placement, or justifying a particular level of related services, the psychiatric evaluation provides the independent expert opinion that makes those decisions defensible.</p>

<p>Special education teams get the most out of psychiatric evaluations when they read the report carefully before the meeting, invite discussion of the findings at the Individualized Education Program table, and ask the evaluating clinician to participate in the meeting or be available by phone when complex questions arise.</p>
    `,
  },
  {
    slug: "understanding-idea-requirements-psychiatric-assessments-connecticut",
    title: "Understanding IDEA Requirements for Psychiatric Assessments in Connecticut Schools",
    metaDescription:
      "A plain-language explanation of how IDEA requirements apply to psychiatric assessments in Connecticut school districts, and what Special Education Directors need to know to remain in compliance.",
    publishedDate: "2026-03-24",
    readingTimeMinutes: 5,
    audience: ["Special Education Directors"],
    tags: ["IDEA", "Compliance", "Connecticut", "Special Education", "Legal"],
    excerpt:
      "The Individuals with Disabilities Education Act sets specific requirements around evaluation, eligibility, and the development of appropriate programming. Understanding how psychiatric assessments fit within that framework is essential for any Special Education Director.",
    content: `
<p>The Individuals with Disabilities Education Act, generally known as IDEA, sets the federal framework that governs how school districts identify, evaluate, and serve students with disabilities. Psychiatric conditions are not called out as their own separate category under IDEA, but they intersect with the law's evaluation and eligibility requirements constantly — most often under the Emotional Disturbance and Other Health Impairment categories. Understanding exactly how a psychiatric assessment fits into that framework helps a Special Education Director make decisions that are both clinically sound and procedurally defensible.</p>

<h2>What IDEA Actually Requires of an Evaluation</h2>

<p>IDEA requires that an evaluation assess a student in all areas related to the suspected disability, and that the district not rely on any single procedure as the sole basis for determining eligibility or programming. When a student's presentation includes psychiatric symptoms — mood instability, anxiety, attention difficulties, trauma responses, or behaviors that raise safety concerns — a purely psychoeducational evaluation may not fully capture what is happening. This is where a psychiatric evaluation becomes relevant: it is one of the "sources of information" IDEA anticipates a team may need to draw on, alongside psychoeducational testing, teacher and parent input, and observational data.</p>

<p>The evaluation also has to be sufficiently comprehensive to identify all of a student's special education and related service needs, whether or not those needs are commonly linked to the disability category the student is initially referred under. A student referred for academic concerns may, in the course of a thorough evaluation, reveal a psychiatric condition that requires its own set of accommodations and services. IDEA's comprehensiveness requirement is part of why psychiatric input is often necessary even when the original referral did not mention mental health at all.</p>

<h2>Eligibility Categories Where Psychiatric Evaluations Matter Most</h2>

<p>Two IDEA disability categories are most frequently supported by psychiatric evaluation findings. The Emotional Disturbance category requires documentation of specific characteristics — such as an inability to build or maintain relationships, inappropriate behavior or feelings under normal circumstances, a general pervasive mood of unhappiness or depression, or a tendency to develop physical symptoms tied to personal or school problems — that have been present over a long period of time and to a marked degree, and that adversely affect educational performance. A psychiatric evaluation is often the clearest, most direct way to document these characteristics with the clinical specificity that this category demands.</p>

<p>The Other Health Impairment category, which covers conditions involving limited alertness that adversely affects educational performance, is the category most often used for students with ADHD, but it also applies to a range of other psychiatric and medical conditions that limit a student's alertness to the educational environment. A psychiatric evaluation provides the diagnostic clarity and functional analysis that supports eligibility under this category as well.</p>

<h2>Connecticut's Planning and Placement Team Process</h2>

<p>Connecticut uses the term Planning and Placement Team, or PPT, for what federal law calls the IEP team. The PPT process in Connecticut follows the same underlying IDEA requirements around parental consent, evaluation timelines, and team-based decision-making, but districts should confirm current procedural timelines and documentation requirements with their own legal counsel or the Connecticut State Department of Education, since these details are periodically updated and vary depending on the specific circumstances of a referral. What does not vary is the underlying principle: any psychiatric evaluation commissioned to support a PPT decision needs to be shared with, and meaningfully considered by, the full team — not treated as a formality attached after decisions have already been made.</p>

<h2>Independent Evaluations and Procedural Safeguards</h2>

<p>IDEA's procedural safeguards give parents the right to request an independent educational evaluation at public expense if they disagree with an evaluation the district has conducted. While this right is most commonly associated with psychoeducational testing, it extends to psychiatric evaluations as well when psychiatric functioning is the area of disagreement. Districts that proactively commission independent psychiatric evaluations in complex cases — rather than waiting for a parent to formally invoke this right — often find that they build trust with families and reduce the likelihood of a dispute reaching that stage at all.</p>

<h2>What This Means in Practice</h2>

<p>For a Special Education Director, the practical takeaway is straightforward. When a student's suspected disability involves psychiatric symptoms, and the existing evaluation data does not clearly explain the student's functioning, IDEA's comprehensiveness requirement is a strong argument for commissioning a psychiatric evaluation before the team finalizes eligibility or programming decisions. Doing so is not an optional enhancement to the process — it is often what full compliance with IDEA's evaluation standard actually requires, and it produces a record that will hold up if a decision is ever challenged.</p>
    `,
  },
  {
    slug: "when-should-school-district-request-independent-psychiatric-evaluation",
    title: "When Should a School District Request an Independent Psychiatric Evaluation?",
    metaDescription:
      "A practical guide for Connecticut Special Education Directors on the clinical and legal indicators that signal it is time to request an independent psychiatric evaluation for a student.",
    publishedDate: "2026-04-07",
    readingTimeMinutes: 5,
    audience: ["Special Education Directors", "School Psychologists"],
    tags: ["Psychiatric Evaluation", "IEP", "Special Education", "Connecticut", "Clinical Indicators"],
    excerpt:
      "Knowing when to request an independent psychiatric evaluation is one of the most consequential judgment calls a Special Education Director makes. The decision involves clinical, legal, and financial considerations — and getting it right benefits everyone involved.",
    content: `
<p>Knowing when to request an independent psychiatric evaluation is one of the most consequential judgment calls a Special Education Director makes. Request one too readily, and the district may be spending resources on cases that did not need outside psychiatric input. Wait too long, and the district may find itself building an IEP on an incomplete clinical picture, or facing a dispute that a timely evaluation could have prevented. There is no single trigger that applies to every case, but there are recognizable clinical, procedural, and practical indicators that a Special Education Director can watch for.</p>

<h2>Clinical Indicators</h2>

<p>The clearest clinical signal is a student presentation that existing evaluation data does not adequately explain. This includes students whose behavioral or emotional symptoms appear disproportionate to what psychoeducational testing or classroom observation alone can account for, students with multiple overlapping diagnoses whose interaction is unclear, and students whose symptoms have changed significantly since their last comprehensive evaluation. It also includes any situation involving expressed suicidal ideation, self-harm, or behavior that raises safety concerns for the student or others — these situations call for a formal psychiatric risk assessment rather than reliance on school-based observation alone.</p>

<p>Questions about medication — whether a student's current medication regimen is contributing to attention or behavioral difficulties in the classroom, or whether a student's presentation suggests an unaddressed psychiatric condition that has not yet been formally diagnosed — are also strong indicators. School psychologists and school-based clinicians are not positioned to make medical diagnoses or evaluate medication effects, and psychiatric input fills that gap directly.</p>

<h2>Procedural and Legal Indicators</h2>

<p>A parent's disagreement with the district's existing evaluation is one of the most common paths toward requesting an independent psychiatric evaluation, and it is worth taking seriously even before it escalates into a formal request for an independent educational evaluation. A family that has expressed skepticism about a diagnosis, a proposed placement, or the adequacy of prior testing is signaling that the current record may not be strong enough to support the team's position if it is challenged.</p>

<p>A history of repeated IEP revisions without a clear clinical rationale, prior due process activity involving the student or family, or a pattern of placement instability are all indicators that the existing documentation has not kept pace with the complexity of the case. In each of these situations, an independent psychiatric evaluation strengthens the record in a way that benefits the district regardless of how the underlying dispute resolves.</p>

<h2>Financial and Placement Indicators</h2>

<p>When a team is considering a more restrictive placement — a therapeutic day program, a residential placement, or a significant increase in related services — the cost implications are substantial enough that the decision warrants independent clinical support. A psychiatric evaluation that documents the specific level of support a student's condition requires gives the team a defensible basis for a placement decision that will inevitably draw scrutiny, whether from the family, from a funding authority, or from a compliance review.</p>

<h2>Timing Considerations</h2>

<p>Because a comprehensive psychiatric evaluation typically takes several weeks from referral to final report, Special Education Directors get the most value out of requesting one early — ideally before a PPT meeting where a significant eligibility or placement decision is anticipated, rather than after the meeting has already been scheduled. Requesting an evaluation reactively, once a dispute has already surfaced, still has value, but it puts the team in a position of catching up rather than building its case proactively.</p>

<h2>How to Initiate the Request</h2>

<p>In practice, the request typically originates with the PPT team identifying a need, followed by obtaining informed parental consent, and then a referral to an independent evaluator with no employment or contractual relationship with the district. Districts that have an established relationship with an independent child and adolescent psychiatrist are able to move through this process considerably faster than districts starting from scratch each time the need arises, which is one of the practical advantages of building that relationship before a complex case makes it urgent.</p>

<p>The judgment call itself will never be purely formulaic. But a Special Education Director who watches for these clinical, procedural, and financial indicators — and who is willing to request an evaluation proactively rather than only in response to an escalating dispute — will consistently make this decision well.</p>
    `,
  },
  {
    slug: "difference-between-school-psychologist-evaluation-and-independent-psychiatric-evaluation",
    title: "The Difference Between a School Psychologist's Evaluation and an Independent Psychiatric Evaluation",
    metaDescription:
      "Clarifying the distinct roles of school psychologists and child psychiatrists in the evaluation process, and explaining when each type of evaluation is most appropriate for Connecticut IEP teams.",
    publishedDate: "2026-04-21",
    readingTimeMinutes: 5,
    audience: ["Special Education Directors", "School Psychologists"],
    tags: ["School Psychologist", "Psychiatric Evaluation", "IEP", "Connecticut", "Roles"],
    excerpt:
      "School psychologists and child psychiatrists both contribute critical expertise to the special education process — but their training, scope of practice, and the types of questions they are best equipped to answer are meaningfully different.",
    content: `
<p>School psychologists and child and adolescent psychiatrists both contribute critical expertise to the special education process, and IEP teams rely on both regularly. But the two professions have different training, operate under different scopes of practice, and are equipped to answer meaningfully different clinical questions. Understanding that difference helps a team decide which evaluation — or which combination of the two — is appropriate for a given student.</p>

<h2>Training and Scope of Practice</h2>

<p>A school psychologist typically holds a specialist-level or doctoral degree in school psychology, with training centered on psychoeducational assessment, cognitive and achievement testing, functional behavior assessment, and the application of that data to educational programming. School psychologists are embedded in the school system, which gives them ongoing access to classroom observation, teacher input, and the day-to-day functioning of the student in the educational environment.</p>

<p>A child and adolescent psychiatrist is a physician who has completed medical school, a psychiatry residency, and a subspecialty fellowship in child and adolescent psychiatry. This training is grounded in the diagnosis and treatment of psychiatric illness, differential diagnosis that accounts for medical and neurological contributors to a student's symptoms, and — where clinically indicated — the evaluation of medication as part of treatment. A psychiatrist's scope of practice includes making formal psychiatric diagnoses, something that falls outside a school psychologist's training and licensure.</p>

<h2>What a School Psychologist's Evaluation Is Best Suited to Answer</h2>

<p>A school psychologist's evaluation is the right tool for questions about a student's cognitive profile, whether a specific learning disability is present, how a student's academic achievement compares to their intellectual ability, and what accommodations or specially designed instruction would address an identified processing weakness. Functional behavior assessments — identifying the antecedents, behaviors, and consequences that maintain a challenging behavior pattern in the school setting — are also squarely within a school psychologist's expertise, and they generate the kind of practical, classroom-level intervention plans that a psychiatric evaluation is not designed to produce.</p>

<h2>What an Independent Psychiatric Evaluation Is Best Suited to Answer</h2>

<p>An independent psychiatric evaluation is the right tool when the central question is diagnostic: what psychiatric condition, if any, explains a pattern of mood, anxiety, attentional, or behavioral symptoms, and how does that diagnosis inform the student's educational needs. It is also the appropriate tool when a student's presentation may have a medical or neurological contributor that needs to be ruled in or out, when medication is already part of the picture and its effects need clinical evaluation, or when a student's behavior raises safety concerns that call for a formal psychiatric risk assessment.</p>

<p>Because a psychiatrist brings a medical framework to the evaluation, they are also positioned to integrate developmental history, medical records, and family psychiatric history in a way that produces a more complete differential diagnosis than a psychoeducational evaluation alone can offer.</p>

<h2>Why Teams Sometimes Need Both</h2>

<p>These evaluations are complementary rather than competing, and the strongest IEP teams routinely use both when a student's case calls for it. A student with a suspected learning disability and a co-occurring mood disorder benefits from a school psychologist's cognitive and achievement testing alongside a psychiatrist's diagnostic clarification of the mood disorder and its functional impact. Neither evaluation, on its own, would give the team the complete picture it needs to build an appropriate program.</p>

<h2>A Practical Distinction for Teams to Remember</h2>

<p>A useful way to frame the distinction for a PPT team: a school psychologist answers "how does this student learn, and what does that mean for instruction," while a psychiatrist answers "what psychiatric condition is present, and what does that mean clinically and educationally." Both questions matter. Recognizing which one is actually unanswered in a given case is the first step toward requesting the evaluation that will actually move the student's programming forward.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
