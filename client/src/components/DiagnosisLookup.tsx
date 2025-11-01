import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle, BookOpen } from "lucide-react";

interface Accommodation {
  category: string;
  items: string[];
}

interface DiagnosisData {
  name: string;
  educationalImpact: string[];
  accommodations: Accommodation[];
}

const diagnosesData: Record<string, DiagnosisData> = {
  adhd: {
    name: "ADHD (Attention-Deficit/Hyperactivity Disorder)",
    educationalImpact: [
      "Difficulty sustaining attention during lectures and independent work",
      "Challenges following multi-step directions and completing long assignments",
      "Impulsive responses that may disrupt learning and peer interactions",
      "Difficulty organizing materials, tracking assignments, and meeting deadlines",
      "Hyperactivity that makes sitting still and quiet work challenging",
      "Inconsistent academic performance despite adequate intelligence",
      "Increased risk of academic underachievement and grade retention"
    ],
    accommodations: [
      {
        category: "Academic Accommodations",
        items: [
          "Extended time on tests and assignments (typically 1.5x to 2x)",
          "Break down long assignments into smaller, manageable chunks",
          "Provide written and verbal instructions",
          "Use of graphic organizers and visual aids",
          "Reduced homework load or modified assignments",
          "Access to class notes or note-taking assistance"
        ]
      },
      {
        category: "Environmental Accommodations",
        items: [
          "Preferential seating (front of class, away from distractions)",
          "Quiet, distraction-reduced testing environment",
          "Use of fidget tools or movement breaks",
          "Standing desk or flexible seating options"
        ]
      },
      {
        category: "Behavioral Supports",
        items: [
          "Positive reinforcement system with immediate feedback",
          "Scheduled movement breaks (every 20-30 minutes)",
          "Self-monitoring tools and checklists",
          "Use of timers for task completion awareness"
        ]
      }
    ]
  },
  autism: {
    name: "Autism Spectrum Disorder (ASD)",
    educationalImpact: [
      "Difficulty with social communication and understanding social cues",
      "Challenges with transitions and changes in routine",
      "Sensory sensitivities that can be overwhelming in school environments",
      "Literal interpretation of language; difficulty with abstract concepts",
      "Executive functioning challenges affecting organization and planning",
      "Difficulty with group work and unstructured social situations",
      "May have areas of exceptional ability alongside areas of significant challenge"
    ],
    accommodations: [
      {
        category: "Communication Supports",
        items: [
          "Visual schedules and daily routines posted",
          "Social stories for new situations or transitions",
          "Explicit instruction in social skills",
          "Use of visual supports (picture cards, communication boards)",
          "Advance notice of schedule changes",
          "Clear, concrete language (avoid idioms and sarcasm)"
        ]
      },
      {
        category: "Sensory Accommodations",
        items: [
          "Access to sensory breaks or quiet space",
          "Noise-canceling headphones for overwhelming environments",
          "Flexible seating options",
          "Reduced sensory input during transitions",
          "Access to sensory tools (fidgets, weighted lap pad)"
        ]
      },
      {
        category: "Social-Emotional Supports",
        items: [
          "Structured peer interaction opportunities with support",
          "Social skills group or lunch bunch",
          "Designated safe person and safe space",
          "Break card system for self-advocacy",
          "Peer buddy or mentor system"
        ]
      }
    ]
  },
  anxiety: {
    name: "Anxiety Disorders",
    educationalImpact: [
      "Excessive worry about academic performance and social situations",
      "Physical symptoms (stomachaches, headaches) that interfere with attendance",
      "Avoidance of anxiety-provoking situations (tests, presentations, social interactions)",
      "Difficulty concentrating due to intrusive worries",
      "Perfectionism that slows work completion or prevents starting tasks",
      "Social withdrawal and difficulty participating in class",
      "Increased absences during high-stress periods (test weeks, presentations)"
    ],
    accommodations: [
      {
        category: "Academic Accommodations",
        items: [
          "Extended time on tests and assignments",
          "Advance notice of tests, presentations, or changes",
          "Option to take tests in separate, quiet location",
          "Flexibility with deadlines during high-stress periods",
          "Breaks during long tasks or tests",
          "Option to present to teacher privately"
        ]
      },
      {
        category: "Environmental Supports",
        items: [
          "Designated safe space or calm-down area",
          "Access to guidance counselor or social worker",
          "Preferential seating near exit",
          "Quiet testing environment"
        ]
      },
      {
        category: "Social-Emotional Supports",
        items: [
          "Check-in/check-out system with trusted adult",
          "Break or pass system to leave class if overwhelmed",
          "Explicit teaching of coping strategies",
          "Access to school counselor or psychologist"
        ]
      }
    ]
  },
  depression: {
    name: "Depression",
    educationalImpact: [
      "Low energy and motivation affecting task initiation and completion",
      "Difficulty concentrating and processing information",
      "Withdrawal from peers and previously enjoyed activities",
      "Increased absences and tardiness",
      "Decline in academic performance and grades",
      "Negative self-talk and feelings of hopelessness about school",
      "Changes in sleep affecting alertness and attendance"
    ],
    accommodations: [
      {
        category: "Academic Accommodations",
        items: [
          "Extended time for assignments and tests",
          "Flexible deadlines with opportunity to make up work",
          "Reduced homework load during acute episodes",
          "Break down large projects into smaller steps",
          "Grace period for late work without penalty"
        ]
      },
      {
        category: "Attendance and Engagement",
        items: [
          "Flexible attendance policy with mental health days",
          "Reduced participation requirements during low-energy periods",
          "Excused absences for mental health appointments",
          "Re-entry support after absences"
        ]
      },
      {
        category: "Social-Emotional Supports",
        items: [
          "Regular check-ins with school counselor",
          "Access to safe space for emotional regulation",
          "Connection with trusted adult in building",
          "Suicide risk assessment and safety planning if needed"
        ]
      }
    ]
  },
  suicidality: {
    name: "Suicidality and Self-Harm",
    educationalImpact: [
      "Overwhelming emotional distress that prevents focus on learning",
      "Safety concerns requiring immediate intervention and ongoing monitoring",
      "Frequent absences for mental health treatment and hospitalizations",
      "Difficulty engaging in academic work due to crisis state",
      "Social isolation and withdrawal from peers",
      "Need for intensive support and supervision",
      "Potential for contagion effect requiring careful management"
    ],
    accommodations: [
      {
        category: "Safety Planning (Critical)",
        items: [
          "Comprehensive safety plan with student, family, and providers",
          "Designated safe adult(s) in building for check-ins",
          "Clear protocol for crisis response",
          "Restricted access to means (sharp objects, medications)",
          "Supervision plan during unstructured times",
          "Communication between school and outpatient providers"
        ]
      },
      {
        category: "Social-Emotional Supports",
        items: [
          "Daily check-ins with school mental health staff",
          "Access to crisis intervention services",
          "Teach and practice coping skills",
          "Family involvement in safety planning",
          "Referral to intensive outpatient care if needed"
        ]
      },
      {
        category: "Academic Accommodations",
        items: [
          "Reduced academic demands during acute crisis",
          "Flexible deadlines and make-up work policy",
          "Excused absences for mental health treatment",
          "Modified schedule if full day is overwhelming",
          "Gradual reintegration after absence"
        ]
      }
    ]
  },
  odd: {
    name: "Oppositional Defiant Disorder (ODD)",
    educationalImpact: [
      "Frequent conflicts with teachers and authority figures",
      "Refusal to comply with rules and directions",
      "Argumentative behavior that disrupts instruction",
      "Difficulty working cooperatively in groups",
      "Blaming others for mistakes and misbehavior",
      "Easily annoyed by peers and adults",
      "Increased disciplinary referrals and suspensions"
    ],
    accommodations: [
      {
        category: "Behavioral Supports",
        items: [
          "Positive Behavior Support Plan with clear expectations",
          "Functional Behavior Assessment to identify triggers",
          "Positive reinforcement for compliance",
          "Teach conflict resolution and anger management",
          "Avoid power struggles; offer choices",
          "Use of calm, neutral tone and language"
        ]
      },
      {
        category: "Relationship Building",
        items: [
          "Designated trusted adult for check-ins",
          "Opportunities for positive interactions with adults",
          "Mentorship or peer buddy program",
          "Restorative practices rather than punitive discipline"
        ]
      },
      {
        category: "Environmental Supports",
        items: [
          "Safe space for de-escalation",
          "Break card system for self-regulation",
          "Structured, predictable routines",
          "Seating away from peers who escalate behavior"
        ]
      }
    ]
  },
  bipolar: {
    name: "Bipolar Disorder",
    educationalImpact: [
      "Significant mood swings affecting energy and concentration",
      "During manic episodes: impulsivity, poor judgment, excessive talking",
      "During depressive episodes: low energy, difficulty concentrating, withdrawal",
      "Inconsistent academic performance across mood episodes",
      "Sleep disturbances affecting attendance and alertness",
      "Difficulty maintaining peer relationships due to mood variability",
      "Increased absences during acute mood episodes"
    ],
    accommodations: [
      {
        category: "Academic Accommodations",
        items: [
          "Flexible deadlines to accommodate mood episodes",
          "Extended time on tests and assignments",
          "Reduced workload during episodes",
          "Option to make up work after mood stabilization",
          "Modified schedule during acute episodes"
        ]
      },
      {
        category: "Monitoring and Communication",
        items: [
          "Regular check-ins with school mental health staff",
          "Communication between school, family, and providers",
          "Monitoring for early warning signs of mood episodes",
          "Crisis plan for manic or depressive episodes"
        ]
      },
      {
        category: "Environmental Supports",
        items: [
          "Access to quiet space for regulation",
          "Reduced stimulation during manic episodes",
          "Supportive environment during depressive episodes",
          "Consistent daily routine to support mood stability"
        ]
      }
    ]
  },
  trauma: {
    name: "Trauma / PTSD",
    educationalImpact: [
      "Hypervigilance and difficulty feeling safe in school environment",
      "Emotional dysregulation and difficulty managing stress",
      "Difficulty trusting adults and forming relationships",
      "Avoidance of trauma reminders that may be present in curriculum",
      "Re-experiencing symptoms (flashbacks, nightmares) affecting concentration",
      "Difficulty with memory and executive functioning",
      "Behavioral outbursts or withdrawal when triggered"
    ],
    accommodations: [
      {
        category: "Safety and Relationship Building",
        items: [
          "Trauma-informed approach by all staff",
          "Designated safe adult for check-ins",
          "Predictable, consistent routines",
          "Advance notice of potentially triggering content",
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
          "Mindfulness or grounding exercises"
        ]
      },
      {
        category: "Academic Accommodations",
        items: [
          "Extended time for processing",
          "Reduced demands during dysregulated periods",
          "Flexibility with deadlines",
          "Option to skip triggering content with alternative",
          "Grace for trauma-related absences"
        ]
      }
    ]
  }
};

export default function DiagnosisLookup() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<string | null>(null);

  const diagnoses = [
    { id: "adhd", name: "ADHD", keywords: ["adhd", "attention", "hyperactivity", "add"] },
    { id: "autism", name: "Autism", keywords: ["autism", "asd", "asperger", "spectrum"] },
    { id: "anxiety", name: "Anxiety", keywords: ["anxiety", "anxious", "worry", "panic"] },
    { id: "depression", name: "Depression", keywords: ["depression", "depressed", "sad", "mood"] },
    { id: "suicidality", name: "Suicidality & Self-Harm", keywords: ["suicide", "suicidal", "self-harm", "self harm", "cutting"] },
    { id: "odd", name: "ODD", keywords: ["odd", "oppositional", "defiant"] },
    { id: "bipolar", name: "Bipolar", keywords: ["bipolar", "manic", "mania"] },
    { id: "trauma", name: "Trauma / PTSD", keywords: ["trauma", "ptsd", "post-traumatic"] }
  ];

  const handleSearch = () => {
    const searchLower = searchTerm.toLowerCase().trim();
    const found = diagnoses.find(d => 
      d.keywords.some(keyword => searchLower.includes(keyword))
    );
    if (found) {
      setSelectedDiagnosis(found.id);
    } else {
      setSelectedDiagnosis(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const selectedData = selectedDiagnosis ? diagnosesData[selectedDiagnosis] : null;

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/20">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Educational Impact & IEP Guide</h3>
            <p className="text-muted-foreground">
              Search for a psychiatric diagnosis to learn about its educational impact and recommended IEP accommodations
            </p>
          </div>
          
          <div className="flex gap-2 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Enter diagnosis (e.g., ADHD, Autism, Anxiety)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>


        </CardContent>
      </Card>

      {/* Results Display */}
      {selectedData && (
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold mb-6 text-center">{selectedData.name}</h3>
              
              {/* Educational Impact Section */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Educational Impact
                </h4>
                <p className="text-muted-foreground mb-4">
                  Understanding how this diagnosis affects learning is essential for developing effective educational supports:
                </p>
                <ul className="space-y-3">
                  {selectedData.educationalImpact.map((impact, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IEP Accommodations Section */}
              <div>
                <h4 className="text-2xl font-bold mb-4 text-primary">
                  Recommended IEP Accommodations
                </h4>
                <p className="text-muted-foreground mb-6">
                  Evidence-based accommodations that can help students with this diagnosis succeed in school:
                </p>
                
                <div className="space-y-6">
                  {selectedData.accommodations.map((accommodation, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h5 className="text-lg font-bold mb-3">{accommodation.category}</h5>
                      <ul className="space-y-2">
                        {accommodation.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h4 className="text-lg font-bold mb-3">Important Note</h4>
              <p className="text-sm text-muted-foreground">
                These are general recommendations based on best practices. Every student is unique, and accommodations should be individualized based on a comprehensive psychiatric evaluation. A thorough evaluation provides the clinical foundation needed to determine which specific accommodations are most appropriate for a particular student.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {searchTerm && !selectedData && selectedDiagnosis === null && (
        <Card className="bg-muted/30">
          <CardContent className="pt-6 text-center py-8">
            <p className="text-muted-foreground">
              No results found for "{searchTerm}". Please try searching for: ADHD, Autism, Anxiety, Depression, Suicidality, ODD, Bipolar, or Trauma/PTSD
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
