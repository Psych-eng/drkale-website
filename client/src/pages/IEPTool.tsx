import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle } from "lucide-react";

interface Accommodation {
  category: string;
  items: string[];
}

interface DiagnosisData {
  name: string;
  description: string;
  accommodations: Accommodation[];
}

const diagnosesData: Record<string, DiagnosisData> = {
  adhd: {
    name: "ADHD (Attention-Deficit/Hyperactivity Disorder)",
    description: "Students with ADHD often struggle with sustained attention, impulse control, and hyperactivity, which can significantly impact their ability to complete tasks, follow multi-step directions, and regulate behavior in the classroom.",
    accommodations: [
      {
        category: "Academic Accommodations",
        items: [
          "Extended time on tests and assignments (typically 1.5x to 2x)",
          "Break down long assignments into smaller, manageable chunks with separate due dates",
          "Provide written and verbal instructions",
          "Use of graphic organizers and visual aids",
          "Reduced homework load or modified assignments",
          "Access to class notes or note-taking assistance",
          "Frequent check-ins for understanding and progress monitoring"
        ]
      },
      {
        category: "Environmental Accommodations",
        items: [
          "Preferential seating (front of class, away from distractions)",
          "Quiet, distraction-reduced testing environment",
          "Use of fidget tools or movement breaks",
          "Standing desk or flexible seating options",
          "Reduced visual and auditory distractions in workspace"
        ]
      },
      {
        category: "Behavioral Supports",
        items: [
          "Positive reinforcement system with immediate feedback",
          "Clear, consistent behavioral expectations posted visually",
          "Scheduled movement breaks (every 20-30 minutes)",
          "Redirect prompts rather than punitive consequences",
          "Self-monitoring tools and checklists",
          "Use of timers for task completion awareness"
        ]
      },
      {
        category: "Organizational Supports",
        items: [
          "Daily or weekly assignment planner with teacher verification",
          "Color-coded folders and materials for different subjects",
          "Extra set of textbooks for home",
          "Locker check-ins or organizational support",
          "Digital tools for assignment tracking"
        ]
      },
      {
        category: "Testing Accommodations",
        items: [
          "Extended time (1.5x to 2x)",
          "Separate, quiet testing location",
          "Breaks during testing",
          "Read-aloud option for non-reading tests",
          "Use of calculator or other assistive tools"
        ]
      }
    ]
  },
  autism: {
    name: "Autism Spectrum Disorder (ASD)",
    description: "Students with autism may experience challenges with social communication, sensory processing, executive functioning, and adapting to changes in routine. They often benefit from structured, predictable environments with explicit instruction in social skills.",
    accommodations: [
      {
        category: "Communication Supports",
        items: [
          "Visual schedules and daily routines posted",
          "Social stories for new situations or transitions",
          "Explicit instruction in social skills and pragmatic language",
          "Use of visual supports (picture cards, communication boards)",
          "Advance notice of schedule changes",
          "Clear, concrete language (avoid idioms and sarcasm)",
          "Written instructions in addition to verbal"
        ]
      },
      {
        category: "Sensory Accommodations",
        items: [
          "Access to sensory breaks or quiet space",
          "Noise-canceling headphones for overwhelming environments",
          "Flexible seating options (wobble cushion, bean bag)",
          "Reduced sensory input during transitions",
          "Dimmed lighting or natural light when possible",
          "Access to sensory tools (fidgets, weighted lap pad)"
        ]
      },
      {
        category: "Social-Emotional Supports",
        items: [
          "Structured peer interaction opportunities with support",
          "Social skills group or lunch bunch",
          "Designated safe person and safe space for regulation",
          "Break card system for self-advocacy",
          "Explicit teaching of emotional regulation strategies",
          "Peer buddy or mentor system"
        ]
      },
      {
        category: "Academic Accommodations",
        items: [
          "Extended time for processing and task completion",
          "Chunking of multi-step directions",
          "Use of special interests to increase engagement",
          "Graphic organizers and visual supports",
          "Reduced writing demands (scribe, speech-to-text)",
          "Predictable routines and clear expectations"
        ]
      },
      {
        category: "Behavioral Supports",
        items: [
          "Positive behavior support plan with visual supports",
          "Functional Behavior Assessment (FBA) if needed",
          "Reinforcement of desired behaviors with preferred activities",
          "Advance warning of transitions (5-minute, 2-minute warnings)",
          "Consistent, predictable consequences",
          "Avoid power struggles; offer choices when possible"
        ]
      }
    ]
  },
  anxiety: {
    name: "Anxiety Disorders",
    description: "Students with anxiety may experience excessive worry, physical symptoms (stomachaches, headaches), avoidance behaviors, and difficulty concentrating. Academic and social demands can trigger or worsen anxiety symptoms.",
    accommodations: [
      {
        category: "Academic Accommodations",
        items: [
          "Extended time on tests and assignments",
          "Advance notice of tests, presentations, or changes",
          "Option to take tests in separate, quiet location",
          "Flexibility with deadlines during high-stress periods",
          "Reduced homework load during acute anxiety episodes",
          "Breaks during long tasks or tests",
          "Option to present to teacher privately rather than whole class"
        ]
      },
      {
        category: "Environmental Supports",
        items: [
          "Designated safe space or calm-down area",
          "Access to guidance counselor or social worker",
          "Preferential seating near exit or away from high-traffic areas",
          "Quiet testing environment",
          "Reduced sensory stimulation when needed"
        ]
      },
      {
        category: "Social-Emotional Supports",
        items: [
          "Check-in/check-out system with trusted adult",
          "Break or pass system to leave class if overwhelmed",
          "Social skills support for peer interactions",
          "Explicit teaching of coping strategies",
          "Access to school counselor or psychologist",
          "Parent communication system for high-anxiety days"
        ]
      },
      {
        category: "Behavioral Supports",
        items: [
          "Positive reinforcement for brave behaviors",
          "Gradual exposure to anxiety-provoking situations with support",
          "Avoid punitive responses to avoidance behaviors",
          "Teach and reinforce self-advocacy skills",
          "Mindfulness or relaxation breaks"
        ]
      }
    ]
  },
  depression: {
    name: "Depression",
    description: "Students with depression may exhibit low energy, difficulty concentrating, withdrawal from activities, changes in sleep or appetite, and feelings of hopelessness. These symptoms can significantly impact academic performance and social engagement.",
    accommodations: [
      {
        category: "Academic Accommodations",
        items: [
          "Extended time for assignments and tests",
          "Flexible deadlines with opportunity to make up work",
          "Reduced homework load during acute episodes",
          "Break down large projects into smaller steps",
          "Access to notes or recorded lessons if absent",
          "Option for alternative assignments if traditional format is overwhelming",
          "Grace period for late work without penalty"
        ]
      },
      {
        category: "Attendance and Engagement",
        items: [
          "Flexible attendance policy with mental health days",
          "Option to participate remotely when unable to attend",
          "Reduced participation requirements during low-energy periods",
          "Excused absences for mental health appointments",
          "Re-entry support after absences"
        ]
      },
      {
        category: "Social-Emotional Supports",
        items: [
          "Regular check-ins with school counselor or social worker",
          "Access to safe space for emotional regulation",
          "Connection with trusted adult in building",
          "Peer support or mentorship program",
          "Social skills support if withdrawal has impacted relationships",
          "Suicide risk assessment and safety planning if needed"
        ]
      },
      {
        category: "Environmental Supports",
        items: [
          "Quiet space for breaks",
          "Flexible seating options",
          "Reduced sensory demands",
          "Access to natural light when possible",
          "Movement breaks to increase energy"
        ]
      }
    ]
  },
  suicidality: {
    name: "Suicidality and Self-Harm",
    description: "Students experiencing suicidal ideation or engaging in self-harm require immediate safety planning and ongoing support. These behaviors are often signs of overwhelming emotional distress and require a coordinated response between school, family, and mental health providers.",
    accommodations: [
      {
        category: "Safety Planning (Critical)",
        items: [
          "Comprehensive safety plan developed with student, family, and mental health provider",
          "Designated safe adult(s) in building for check-ins",
          "Clear protocol for crisis response and emergency contacts",
          "Restricted access to means (sharp objects, medications, etc.)",
          "Supervision plan during unstructured times",
          "Communication system between school and outpatient providers",
          "Re-entry plan after hospitalization or crisis"
        ]
      },
      {
        category: "Social-Emotional Supports",
        items: [
          "Daily check-ins with school counselor, psychologist, or social worker",
          "Access to crisis intervention services",
          "Teach and practice coping skills and emotional regulation",
          "Connection to peer support with appropriate supervision",
          "Family involvement in safety planning and support",
          "Referral to intensive outpatient or higher level of care if needed"
        ]
      },
      {
        category: "Academic Accommodations",
        items: [
          "Reduced academic demands during acute crisis",
          "Flexible deadlines and make-up work policy",
          "Excused absences for mental health treatment",
          "Modified schedule if full day is overwhelming",
          "Option for homebound instruction during intensive treatment",
          "Gradual reintegration after absence"
        ]
      },
      {
        category: "Environmental Supports",
        items: [
          "Access to safe, supervised space for breaks",
          "Removal of triggering content with advance warning",
          "Proximity to support staff",
          "Reduced exposure to stressors when possible",
          "Quiet space for emotional regulation"
        ]
      },
      {
        category: "Monitoring and Communication",
        items: [
          "Regular communication between school, family, and providers",
          "Documentation of concerning behaviors or statements",
          "Ongoing risk assessment",
          "Coordination with outside mental health services",
          "Parent notification protocol for safety concerns"
        ]
      }
    ]
  },
  odd: {
    name: "Oppositional Defiant Disorder (ODD)",
    description: "Students with ODD display a pattern of angry, defiant, and vindictive behavior toward authority figures. They may argue with adults, refuse to comply with rules, deliberately annoy others, and blame others for their mistakes.",
    accommodations: [
      {
        category: "Behavioral Supports",
        items: [
          "Positive Behavior Support Plan (PBSP) with clear expectations",
          "Functional Behavior Assessment (FBA) to identify triggers",
          "Consistent, predictable consequences (not punitive)",
          "Positive reinforcement for compliance and respectful behavior",
          "Teach and practice conflict resolution and anger management",
          "Avoid power struggles; offer choices when possible",
          "Use of calm, neutral tone and language"
        ]
      },
      {
        category: "Relationship Building",
        items: [
          "Designated trusted adult for check-ins",
          "Opportunities for positive interactions with adults",
          "Mentorship or peer buddy program",
          "Restorative practices rather than punitive discipline",
          "Focus on building relationship before correction"
        ]
      },
      {
        category: "Environmental Supports",
        items: [
          "Safe space for de-escalation",
          "Break card system for self-regulation",
          "Reduced triggers in environment",
          "Structured, predictable routines",
          "Seating away from peers who escalate behavior"
        ]
      },
      {
        category: "Academic Accommodations",
        items: [
          "Chunking of tasks to reduce frustration",
          "Choice in assignments when possible",
          "Incorporate student interests to increase engagement",
          "Frequent breaks",
          "Modified assignments if frustration leads to refusal"
        ]
      }
    ]
  },
  bipolar: {
    name: "Bipolar Disorder",
    description: "Students with bipolar disorder experience significant mood swings, including periods of elevated mood (mania or hypomania) and periods of depression. These mood episodes can dramatically impact energy, concentration, sleep, and behavior.",
    accommodations: [
      {
        category: "Academic Accommodations",
        items: [
          "Flexible deadlines to accommodate mood episodes",
          "Extended time on tests and assignments",
          "Reduced workload during depressive or manic episodes",
          "Option to make up work after mood stabilization",
          "Access to notes if absent during episodes",
          "Modified schedule during acute episodes"
        ]
      },
      {
        category: "Monitoring and Communication",
        items: [
          "Regular check-ins with school mental health staff",
          "Communication system between school, family, and providers",
          "Monitoring for early warning signs of mood episodes",
          "Crisis plan for manic or depressive episodes",
          "Coordination with outside psychiatrist and therapist"
        ]
      },
      {
        category: "Environmental Supports",
        items: [
          "Access to quiet space for regulation",
          "Reduced stimulation during manic episodes",
          "Supportive environment during depressive episodes",
          "Flexible seating and movement breaks",
          "Consistent daily routine to support mood stability"
        ]
      },
      {
        category: "Behavioral Supports",
        items: [
          "Behavior plan that accounts for mood variability",
          "Teach self-monitoring and early warning sign recognition",
          "Crisis intervention plan",
          "Positive reinforcement during stable periods",
          "Avoid punitive responses to mood-driven behaviors"
        ]
      }
    ]
  },
  trauma: {
    name: "Trauma / PTSD",
    description: "Students who have experienced trauma may exhibit hypervigilance, emotional dysregulation, difficulty trusting adults, avoidance behaviors, and re-experiencing symptoms (flashbacks, nightmares). Trauma can significantly impact learning, behavior, and relationships.",
    accommodations: [
      {
        category: "Safety and Relationship Building",
        items: [
          "Trauma-informed approach by all staff",
          "Designated safe adult for check-ins and support",
          "Predictable, consistent routines",
          "Advance notice of changes or potentially triggering content",
          "Avoid re-traumatization (no forced disclosure)",
          "Build trust before making demands"
        ]
      },
      {
        category: "Emotional Regulation Supports",
        items: [
          "Access to safe space for de-escalation",
          "Break card system",
          "Teach and practice coping skills",
          "Sensory supports (fidgets, weighted items)",
          "Mindfulness or grounding exercises",
          "Access to school counselor or social worker"
        ]
      },
      {
        category: "Academic Accommodations",
        items: [
          "Extended time for processing and task completion",
          "Reduced demands during dysregulated periods",
          "Flexibility with deadlines",
          "Option to skip triggering content with alternative assignment",
          "Breaks during long tasks",
          "Grace for trauma-related absences"
        ]
      },
      {
        category: "Behavioral Supports",
        items: [
          "Positive behavior support plan",
          "Understand behavior as communication of distress",
          "Avoid punitive or shame-based discipline",
          "Restorative practices",
          "Teach self-advocacy and emotional literacy",
          "Co-regulation before expecting self-regulation"
        ]
      },
      {
        category: "Environmental Supports",
        items: [
          "Seating near exit for sense of safety",
          "Reduced sensory overload",
          "Predictable physical environment",
          "Avoid sudden loud noises or surprises",
          "Supervision during unstructured times"
        ]
      }
    ]
  }
};

export default function IEPTool() {
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<string | null>(null);

  const diagnoses = [
    { id: "adhd", name: "ADHD" },
    { id: "autism", name: "Autism Spectrum Disorder" },
    { id: "anxiety", name: "Anxiety Disorders" },
    { id: "depression", name: "Depression" },
    { id: "suicidality", name: "Suicidality & Self-Harm" },
    { id: "odd", name: "Oppositional Defiant Disorder" },
    { id: "bipolar", name: "Bipolar Disorder" },
    { id: "trauma", name: "Trauma / PTSD" }
  ];

  const selectedData = selectedDiagnosis ? diagnosesData[selectedDiagnosis] : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              IEP Accommodations Tool
            </h1>
            <p className="text-lg text-muted-foreground">
              Evidence-based IEP accommodations for common psychiatric diagnoses. Select a diagnosis below to view comprehensive accommodation recommendations organized by category.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnosis Selection */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Select a Diagnosis</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {diagnoses.map((diagnosis) => (
                <Button
                  key={diagnosis.id}
                  variant={selectedDiagnosis === diagnosis.id ? "default" : "outline"}
                  onClick={() => setSelectedDiagnosis(diagnosis.id)}
                  className="h-auto py-4 text-center"
                >
                  {diagnosis.name}
                </Button>
              ))}
            </div>

            {/* Accommodations Display */}
            {selectedData && (
              <div className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-3xl font-bold mb-4">{selectedData.name}</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {selectedData.description}
                    </p>
                  </CardContent>
                </Card>

                {selectedData.accommodations.map((accommodation, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 text-primary">
                        {accommodation.category}
                      </h3>
                      <ul className="space-y-3">
                        {accommodation.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Important Note</h3>
                    <p className="text-sm text-muted-foreground">
                      These accommodations are general recommendations based on best practices. Every student is unique, and accommodations should be individualized based on a comprehensive evaluation and the student's specific needs. A psychiatric evaluation can provide the clinical foundation needed to determine which accommodations are most appropriate for a particular student.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {!selectedData && (
              <Card className="bg-accent/30">
                <CardContent className="pt-6 text-center py-12">
                  <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">
                    Select a diagnosis above to view recommended IEP accommodations
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Comprehensive Psychiatric Evaluation?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            A thorough psychiatric evaluation provides the clinical foundation needed to develop an effective, individualized IEP with appropriate accommodations.
          </p>
          <Button size="lg" variant="secondary" onClick={() => window.location.href = '/contact'}>
            Schedule an Evaluation
          </Button>
        </div>
      </section>
    </div>
  );
}
