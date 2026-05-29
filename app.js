const patterns = [
  {
    id: "recognition",
    name: "Recognition",
    short:
      "Detects, identifies, or classifies unstructured inputs such as images, text, audio, or video.",
    useWhen:
      "The core problem is turning raw files, images, audio, scans, messages, or other unstructured inputs into meaningful categories.",
    data:
      "Clear high-quality samples, representative examples, consistent inputs, and varied real-world cases across contexts.",
    people:
      "People who know what correct identification looks like, understand difficult inputs, and interpret images, documents, or audio.",
    responsible:
      "Use diverse examples, keep humans involved for nuance, and make flagged outputs explainable and reviewable.",
    moves: [
      "Collect 30 to 50 examples of correct and incorrect identification from the workplace.",
      "Define the labels or categories in business language before choosing a model.",
      "Design a human review path for uncertain or high-impact cases.",
    ],
    keywords:
      "classify identify detect recognize image document scan handwriting speech audio video invoice form email category extract read inspection quality",
  },
  {
    id: "conversation",
    name: "Conversation and Human Interaction",
    short:
      "Lets people interact with technology through natural text or voice in a contextual back-and-forth exchange.",
    useWhen:
      "The challenge is helping people ask questions, summarize content, translate, explain documents, or get assistance without rigid commands.",
    data:
      "Real user questions, phrases, requests, context signals, and varied wording styles for the same intent.",
    people:
      "People who answer user questions, spot misunderstandings, and understand how phrasing changes meaning.",
    responsible:
      "Disclose AI use, add guardrails for wrong answers, and escalate complex or sensitive requests to humans.",
    moves: [
      "Write the top 20 user questions and the ideal answer style for each.",
      "Create escalation rules for sensitive, uncertain, or policy-bound requests.",
      "Test responses with real users before broad deployment.",
    ],
    keywords:
      "chat chatbot assistant question answer summarize summary explain translate knowledge search helpdesk support customer employee natural language conversation ask",
  },
  {
    id: "predictive",
    name: "Predictive Analytics and Decisions",
    short:
      "Uses historical and current data to estimate what may happen next and support human decision-making.",
    useWhen:
      "The issue depends on forecasting future outcomes, risks, demand, delays, failures, capacity, cost, or performance.",
    data:
      "Historical examples, current inputs, and enough depth over time to discover meaningful signals.",
    people:
      "People who assess risks, interpret early signals of change, and understand past decisions or historical patterns.",
    responsible:
      "Treat predictions as guidance, keep humans accountable, and communicate assumptions, limits, and confidence levels.",
    moves: [
      "Define the decision the prediction will inform and the time horizon that matters.",
      "Gather historical outcomes with the signals available before each outcome happened.",
      "Agree how confidence levels will influence human action.",
    ],
    keywords:
      "predict forecast estimate risk likelihood demand trend future delay churn maintenance failure capacity budget schedule scenario probability",
  },
  {
    id: "anomalies",
    name: "Patterns and Anomalies",
    short:
      "Learns typical behavior and flags unusual activity, deviations, or emerging risks for review.",
    useWhen:
      "The need is to monitor operations, logs, transactions, dashboards, or signals and notice what is unusual.",
    data:
      "Activity over time, time-stamped or ordered tracking, and enough baseline examples to define normal behavior.",
    people:
      "People who know everyday behavior, monitor operations, and understand the impact of unexpected shifts.",
    responsible:
      "Treat anomalies as things to investigate, avoid overreacting to noise, and establish alert review paths.",
    moves: [
      "Identify the normal operating baseline and the signals that should be tracked.",
      "Define what counts as expected variation versus an alert-worthy shift.",
      "Create escalation levels for low, medium, and high-severity alerts.",
    ],
    keywords:
      "anomaly unusual outlier deviation alert fraud threat monitor monitoring logs dashboard signal spike drop exception variance suspicious detect",
  },
  {
    id: "hyperpersonalization",
    name: "Hyperpersonalization",
    short:
      "Builds and updates individual profiles to tailor recommendations, content, or experiences at scale.",
    useWhen:
      "The issue is that different people need different recommendations, journeys, learning, content, or offers.",
    data:
      "Individual-level information, feedback signals, and fresh evolving inputs to maintain relevance.",
    people:
      "People who track changing needs, understand meaningful individual differences, and know when personalization helps or feels intrusive.",
    responsible:
      "Avoid reinforcing bias or narrowing exposure, explain how personal data shapes recommendations, and personalize only when it benefits the individual.",
    moves: [
      "Identify which individual differences should change the experience.",
      "Decide what feedback will improve recommendations over time.",
      "Set privacy and consent expectations before collecting personal signals.",
    ],
    keywords:
      "personalize personalized recommendation recommend individual tailored profile preference adaptive learning content offer next best action segment user journey",
  },
  {
    id: "goal",
    name: "Goal-Driven Systems",
    short:
      "Optimizes toward a defined goal by testing actions, learning outcomes, and adjusting strategies over time.",
    useWhen:
      "The challenge involves balancing trade-offs, constraints, and actions to improve a defined objective.",
    data:
      "Clear objectives, constraints, success criteria, action and outcome data, and feedback indicators.",
    people:
      "People who understand workflow goals and constraints, evaluate strategies, and interpret trade-offs.",
    responsible:
      "Align goals with values, keep humans responsible for final actions, and test behavior safely, preferably in simulation.",
    moves: [
      "State the objective, constraints, and success measures in one page.",
      "List the available actions and the outcomes each action can influence.",
      "Run a small simulation or controlled pilot before operational use.",
    ],
    keywords:
      "optimize optimization goal strategy tradeoff constraint route pricing bidding scheduling allocate allocation simulation objective improve maximize minimize",
  },
  {
    id: "autonomous",
    name: "Autonomous Systems",
    short:
      "Senses the environment, decides, and acts on its own within human-defined goals, constraints, and safety boundaries.",
    useWhen:
      "The issue requires AI to take actions continuously within boundaries, while people supervise rather than direct every step.",
    data:
      "Real-time signals, rules and boundaries, and continuous awareness data for safe adaptation.",
    people:
      "People who understand the operating environment, manage safety or compliance boundaries, and know when intervention is needed.",
    responsible:
      "Keep accountability with people, confirm safe operating conditions, and maintain active monitoring for unsafe or unexpected behavior.",
    moves: [
      "Define exactly what the system may and may not do without human approval.",
      "Set operating boundaries, stop conditions, and monitoring responsibilities.",
      "Pilot in a low-risk environment before allowing autonomous execution.",
    ],
    keywords:
      "autonomous automate automation agent workflow execute action real-time robot vehicle process orchestration self act intervention operate boundary",
  },
];

const outcomes = [
  ["recognition", "Identify or classify documents, images, audio, or messages"],
  ["conversation", "Answer questions, summarize knowledge, or converse naturally"],
  ["predictive", "Predict risks, demand, delays, failures, or likely outcomes"],
  ["anomalies", "Flag unusual activity, exceptions, threats, or deviations"],
  ["hyperpersonalization", "Tailor recommendations or experiences to each person"],
  ["goal", "Optimize actions against goals, constraints, and trade-offs"],
  ["autonomous", "Let AI take bounded actions or run a workflow"],
];

const dataSignals = [
  ["recognition", "Labeled examples of files, images, audio, scans, or text"],
  ["conversation", "Real user questions, answers, policies, or knowledge articles"],
  ["predictive", "Historical outcomes with current operational inputs"],
  ["anomalies", "Time-stamped logs, readings, metrics, transactions, or events"],
  ["hyperpersonalization", "User profiles, preferences, behaviors, and feedback"],
  ["goal", "Objectives, constraints, action history, and outcome measures"],
  ["autonomous", "Real-time signals, rules, boundaries, and monitoring data"],
];

const autonomyLabels = [
  "Insight only",
  "Recommend only",
  "Draft action",
  "Act with approval",
  "Act within boundaries",
];

const state = {
  selectedOutcomes: new Set(),
  selectedData: new Set(),
};

const $ = (selector) => document.querySelector(selector);

function buildChips(containerId, items, setName) {
  const container = $(`#${containerId}`);
  container.innerHTML = items
    .map(
      ([id, label]) =>
        `<button class="chip" type="button" data-pattern="${id}" data-set="${setName}">${label}</button>`,
    )
    .join("");
}

function tokenize(text) {
  return (text.toLowerCase().match(/[a-z0-9]+/g) || []).filter((word) => word.length > 2);
}

function scorePatterns() {
  const issueText = `${$("#issue").value} ${$("#area").value} ${$("#impact").value}`;
  const words = tokenize(issueText);
  const autonomy = Number($("#autonomy").value);

  return patterns
    .map((pattern) => {
      const keywordSet = new Set(tokenize(pattern.keywords));
      const textHits = words.filter((word) => keywordSet.has(word)).length;
      let score = Math.min(textHits * 9, 36);

      if (state.selectedOutcomes.has(pattern.id)) score += 26;
      if (state.selectedData.has(pattern.id)) score += 22;

      if (pattern.id === "autonomous") score += autonomy * 8;
      if (pattern.id === "goal") score += Math.max(0, autonomy - 1) * 5;
      if (pattern.id === "conversation" && autonomy <= 2) score += 5;
      if (pattern.id === "predictive" && autonomy <= 2) score += 4;
      if (pattern.id === "recognition" && words.includes("manual")) score += 4;
      if (pattern.id === "anomalies" && words.includes("monitor")) score += 5;

      return { ...pattern, score: Math.min(score, 100), textHits };
    })
    .sort((a, b) => b.score - a.score);
}

function confidence(scores) {
  const top = scores[0]?.score || 0;
  const second = scores[1]?.score || 0;
  if (top === 0) return 0;
  return Math.min(96, Math.max(42, Math.round(top * 0.72 + (top - second) * 0.9)));
}

function renderRecommendation() {
  const scores = scorePatterns();
  const top = scores[0];
  const conf = confidence(scores);
  const issueEntered = $("#issue").value.trim().length > 12;

  if (!issueEntered && top.score === 0) {
    $("#topPattern").textContent = "Awaiting your challenge";
    $("#topSummary").textContent = "Your recommendation will appear as soon as you describe the issue.";
    $("#agentState").textContent = "Ready to diagnose";
    $("#agentHint").textContent = "Start with the issue, then refine with the guided choices.";
    updateDetails(null, scores, 0);
    return;
  }

  $("#topPattern").textContent = top.name;
  $("#topSummary").textContent = top.short;
  $("#agentState").textContent = conf >= 70 ? "Strong pattern match" : "Promising pattern match";
  $("#agentHint").textContent =
    conf >= 70
      ? "The signals point clearly to this pattern."
      : "Add more data and outcome selections to sharpen the diagnosis.";
  updateDetails(top, scores, conf);
}

function updateDetails(top, scores, conf) {
  $("#confidenceText").textContent = `${conf}%`;
  $("#confidenceMeter").value = conf;

  $("#useWhen").textContent = top ? top.useWhen : "Describe a challenge to generate a focused brief.";
  $("#dataNeeds").textContent = top
    ? top.data
    : "The advisor will map your inputs to PMI data considerations.";
  $("#peopleNeeds").textContent = top ? top.people : "Stakeholder perspectives will appear here.";
  $("#responsibleUse").textContent = top ? top.responsible : "Responsible-use guardrails will appear here.";

  $("#nextMoves").innerHTML = top
    ? top.moves.map((move) => `<li>${move}</li>`).join("")
    : "<li>Enter a workplace issue to receive the first recommended moves.</li>";

  $("#scoreList").innerHTML = scores
    .map(
      (item) => `
        <div class="score-row">
          <strong>${item.name}</strong>
          <div class="bar"><span style="width: ${item.score}%"></span></div>
          <span>${item.score}</span>
        </div>
      `,
    )
    .join("");
}

function renderPatternLibrary() {
  $("#patternGrid").innerHTML = patterns
    .map(
      (pattern) => `
        <article class="pattern-card">
          <h3>${pattern.name}</h3>
          <p>${pattern.short}</p>
        </article>
      `,
    )
    .join("");
}

function setAutonomyLabel() {
  $("#autonomyLabel").textContent = autonomyLabels[Number($("#autonomy").value)];
}

function copyBrief() {
  const text = [
    "AI Project Pattern Navigator Brief",
    `Pattern: ${$("#topPattern").textContent}`,
    `Confidence: ${$("#confidenceText").textContent}`,
    `Issue: ${$("#issue").value.trim() || "Not provided"}`,
    `Use when: ${$("#useWhen").textContent}`,
    `Data to look for: ${$("#dataNeeds").textContent}`,
    `People to involve: ${$("#peopleNeeds").textContent}`,
    `Responsible use: ${$("#responsibleUse").textContent}`,
  ].join("\n\n");

  navigator.clipboard?.writeText(text).then(() => showToast("Brief copied")).catch(() => {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.append(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    showToast("Brief copied");
  });
}

function selectedLabels(items, selectedSet) {
  return items.filter(([id]) => selectedSet.has(id)).map(([, label]) => label);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function listItems(values, fallback) {
  const items = values.length ? values : [fallback];
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function aiFitRecommendation(scores, top) {
  const issue = $("#issue").value.toLowerCase();
  const selectedCount = state.selectedOutcomes.size + state.selectedData.size;
  const aiSignals = [
    "messy",
    "unstructured",
    "pattern",
    "predict",
    "forecast",
    "anomaly",
    "unusual",
    "classify",
    "summarize",
    "question",
    "personalize",
    "optimize",
    "autonomous",
  ];
  const hasSignal = aiSignals.some((signal) => issue.includes(signal));

  if (!top || (top.score < 18 && selectedCount < 2 && !hasSignal)) {
    return {
      label: "It is uncertain whether AI belongs; more discovery is required.",
      reason:
        "The current description does not yet show enough evidence of interpretation, pattern recognition, prediction, personalization, optimization, or bounded autonomous action. Clarify the real problem and compare it with simpler process, policy, or workflow changes before positioning this as AI work.",
    };
  }

  if (top.score >= 45 || selectedCount >= 3 || hasSignal) {
    return {
      label: "AI likely belongs as an augmentation to human judgment.",
      reason:
        "The issue appears to involve interpreting varied information, identifying patterns, anticipating outcomes, tailoring responses, optimizing choices, or acting within boundaries. Those are the kinds of reasoning the seven AI patterns are meant to clarify.",
    };
  }

  return {
    label: "AI may belong, but the case needs sharper discovery.",
    reason:
      "There are early signals that AI could help, but the report should be validated with stakeholders, available information, and realistic expectations before moving toward any solution design.",
  };
}

function feasibilityFor(pattern) {
  if (!pattern) {
    return {
      can: ["Support clearer early conversations once the problem and information needs are better described."],
      cant: ["Confirm a pattern without enough detail about the work, data, and decisions involved."],
      wont: ["Replace accountable human judgment or the need to clarify the business problem."],
    };
  }

  const base = {
    recognition: {
      can: ["Help convert raw documents, images, audio, or text into useful categories.", "Reduce manual review effort where inputs are clear and examples are representative."],
      cant: ["Understand every nuance of poor-quality or ambiguous inputs without human review.", "Guarantee fair performance if examples are narrow or biased."],
      wont: ["Replace subject matter experts who define what correct identification means."],
    },
    conversation: {
      can: ["Help people ask questions, summarize information, explain content, and navigate knowledge.", "Improve access to information when user wording varies."],
      cant: ["Guarantee every response is correct without guardrails and escalation paths.", "Resolve complex or sensitive cases without human judgment."],
      wont: ["Replace accountable owners of policies, decisions, or expert advice."],
    },
    predictive: {
      can: ["Surface likely outcomes, risks, trends, or early warning signals.", "Support better human decisions with assumptions and confidence made visible."],
      cant: ["Make the future certain or remove uncertainty from decisions.", "Work well without relevant historical outcomes and current signals."],
      wont: ["Replace leadership accountability for decisions informed by predictions."],
    },
    anomalies: {
      can: ["Notice unusual activity, deviations, or emerging risks that deserve review.", "Help teams focus attention where conditions differ from a normal baseline."],
      cant: ["Prove root cause just because something looks unusual.", "Avoid false alerts without clear baselines and review paths."],
      wont: ["Replace operational judgment about whether an alert matters."],
    },
    hyperpersonalization: {
      can: ["Tailor recommendations, content, or experiences to individual needs.", "Improve relevance when preferences and feedback change over time."],
      cant: ["Know what is helpful without meaningful individual signals.", "Avoid privacy or bias risks unless personalization is governed carefully."],
      wont: ["Replace consent, transparency, or human responsibility for fair experiences."],
    },
    goal: {
      can: ["Explore actions against goals, constraints, and trade-offs.", "Support strategy choices when outcomes can be measured and compared."],
      cant: ["Optimize wisely if goals are vague, conflicting, or misaligned with values.", "Remove trade-offs that require human judgment."],
      wont: ["Replace accountable decisions about which goals matter most."],
    },
    autonomous: {
      can: ["Take bounded actions within defined goals, rules, and monitoring.", "Run repeatable workflows where safe operating conditions are clear."],
      cant: ["Operate safely without real-time signals, boundaries, oversight, and stop conditions.", "Handle every unexpected situation without intervention."],
      wont: ["Shift accountability from people to the system."],
    },
  };

  return base[pattern.id];
}

function reportHtml() {
  const scores = scorePatterns();
  const top = scores[0];
  const conf = confidence(scores);
  const issue = $("#issue").value.trim();
  const area = $("#area").value.trim();
  const impact = $("#impact").value.trim();
  const outcomeLabels = selectedLabels(outcomes, state.selectedOutcomes);
  const dataLabels = selectedLabels(dataSignals, state.selectedData);
  const fit = aiFitRecommendation(scores, top);
  const relevant = scores.filter((item) => item.score > 0).slice(0, 3);
  const alternatives = scores.filter((item) => item.id !== top.id).slice(0, 3);
  const feasibility = feasibilityFor(top);
  const generatedDate = new Date().toLocaleString();

  const fileTitle = "AI Pattern Mapping Report";
  const scoreRows = scores
    .map(
      (item) => `
        <tr>
          <td>${escapeHtml(item.name)}</td>
          <td><div class="bar"><span style="width:${item.score}%"></span></div></td>
          <td>${item.score}</td>
        </tr>
      `,
    )
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${fileTitle}</title>
  <style>
    :root { --black:#070706; --panel:#14130f; --gold:#d6ae5c; --gold2:#f2d38a; --text:#f8edcf; --muted:#c8b98f; --line:rgba(214,174,92,.28); }
    * { box-sizing:border-box; }
    body { margin:0; background:#070706; color:var(--text); font-family:Arial, Helvetica, sans-serif; line-height:1.55; }
    main { width:min(980px, calc(100% - 32px)); margin:0 auto; padding:42px 0; }
    .report-actions { position:sticky; top:0; z-index:2; display:flex; justify-content:space-between; gap:14px; align-items:center; margin:-42px 0 28px; padding:14px 0; background:#070706; border-bottom:1px solid var(--line); }
    .report-actions button { min-height:40px; padding:0 16px; border:0; border-radius:8px; background:linear-gradient(135deg, var(--gold2), var(--gold)); color:#11100d; font-weight:800; cursor:pointer; }
    .report-actions span { color:var(--muted); font-size:13px; }
    header { border-bottom:1px solid var(--line); padding-bottom:22px; margin-bottom:24px; }
    .eyebrow { color:var(--gold); font-size:12px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; margin:0 0 8px; }
    h1 { color:var(--gold2); font-size:42px; line-height:1; margin:0 0 12px; }
    h2 { color:var(--gold2); margin:28px 0 10px; font-size:22px; }
    h3 { color:#f0d995; margin:18px 0 8px; font-size:17px; }
    p { margin:0 0 10px; }
    .summary { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin:20px 0; }
    .card, section { background:var(--panel); border:1px solid var(--line); border-radius:8px; padding:18px; box-shadow:0 18px 50px rgba(0,0,0,.28); }
    .card strong { display:block; color:var(--gold2); font-size:24px; }
    .card span, .muted { color:var(--muted); }
    ul, ol { padding-left:22px; margin:8px 0 0; }
    li { margin:5px 0; }
    table { width:100%; border-collapse:collapse; margin-top:10px; }
    td, th { border-bottom:1px solid var(--line); padding:10px 6px; text-align:left; vertical-align:middle; }
    th { color:var(--gold2); }
    .bar { height:10px; background:rgba(214,174,92,.14); border-radius:999px; overflow:hidden; }
    .bar span { display:block; height:100%; background:linear-gradient(90deg, #a77a2f, #f2d38a); }
    .callout { border-left:4px solid var(--gold); padding-left:14px; color:#ead8a8; }
    footer { color:var(--muted); font-size:12px; margin-top:24px; }
    @media print { body { background:#fff; color:#111; } .report-actions { display:none; } .card, section { box-shadow:none; } }
  </style>
</head>
<body>
  <main>
    <div class="report-actions">
      <button type="button" onclick="window.print()">Print / Save PDF</button>
      <span>Use your browser's Save As if you need an HTML copy.</span>
    </div>
    <header>
      <p class="eyebrow">PMI Seven AI Project Patterns</p>
      <h1>${fileTitle}</h1>
      <p class="muted">Generated ${escapeHtml(generatedDate)} from the AI Project Pattern Navigator. This report follows the reasoning flow from PMI's Applying the Seven Patterns guide: clarify the problem, pressure-test AI fit, map the pattern, identify information and perspectives, then set realistic expectations.</p>
    </header>

    <div class="summary">
      <div class="card"><span>Recommended pattern</span><strong>${escapeHtml(top.name)}</strong></div>
      <div class="card"><span>Confidence</span><strong>${conf}%</strong></div>
      <div class="card"><span>Autonomy level</span><strong>${escapeHtml($("#autonomyLabel").textContent)}</strong></div>
    </div>

    <section>
      <h2>1. Business Problem</h2>
      <p>${escapeHtml(issue || "No workplace issue was entered. Add a clear issue statement before sharing this report.")}</p>
      <p class="muted"><strong>Workplace area:</strong> ${escapeHtml(area || "Not specified")}<br><strong>Main business impact:</strong> ${escapeHtml(impact || "Not specified")}</p>
      <h3>What to clarify next</h3>
      <ul>
        <li>What prompted this request now?</li>
        <li>What is not working today, stated without solution language?</li>
        <li>Which part is the core problem versus a symptom?</li>
      </ul>
    </section>

    <section>
      <h2>2. Should AI Be Used?</h2>
      <p class="callout"><strong>${escapeHtml(fit.label)}</strong></p>
      <p>${escapeHtml(fit.reason)}</p>
      <h3>Signals selected by the user</h3>
      <ul>${listItems(outcomeLabels, "No AI-help statements were selected.")}</ul>
    </section>

    <section>
      <h2>3. Pattern Mapping</h2>
      <p><strong>Best fit:</strong> ${escapeHtml(top.name)}. ${escapeHtml(top.useWhen)}</p>
      <h3>Relevant pattern(s)</h3>
      <ul>${listItems(relevant.map((item) => `${item.name}: ${item.short}`), "No secondary patterns were identified from the current inputs.")}</ul>
      <h3>Why other patterns are less applicable right now</h3>
      <ul>${listItems(alternatives.map((item) => `${item.name}: lower score based on the current issue wording, selected outcomes, available data, and autonomy level.`), "Add more detail to compare against other patterns.")}</ul>
    </section>

    <section>
      <h2>4. Information That Matters</h2>
      <p>${escapeHtml(top.data)}</p>
      <h3>Data signals selected by the user</h3>
      <ul>${listItems(dataLabels, "No available-data statements were selected.")}</ul>
      <h3>Discovery questions</h3>
      <ul>
        <li>Which information is essential for the first conversation, and which is only nice to have?</li>
        <li>Where does this information naturally come from in the workplace?</li>
        <li>Is the information clear, consistent, timely, and representative enough to reason from?</li>
      </ul>
    </section>

    <section>
      <h2>5. Helpful Perspectives</h2>
      <p>${escapeHtml(top.people)}</p>
      <ul>
        <li>Talk first with people directly affected by the issue.</li>
        <li>Include people who interpret the information involved.</li>
        <li>Include people who understand what changes, risks, or exceptions look like in daily work.</li>
      </ul>
    </section>

    <section>
      <h2>6. Feasibility, Risks, and Expectations</h2>
      <h3>CAN support</h3>
      <ul>${listItems(feasibility.can, "Clarify what the pattern can support.")}</ul>
      <h3>CAN'T simplify</h3>
      <ul>${listItems(feasibility.cant, "Clarify what remains ambiguous or difficult.")}</ul>
      <h3>WON'T replace</h3>
      <ul>${listItems(feasibility.wont, "Clarify what must remain human-owned.")}</ul>
      <h3>Responsible use</h3>
      <p>${escapeHtml(top.responsible)}</p>
      <h3>Realistic success</h3>
      <p>Success means stakeholders can explain the problem, why AI may help, which pattern fits, what information matters, what remains human-owned, and what risks must be managed before any solution design begins.</p>
    </section>

    <section>
      <h2>7. Pattern Score Comparison</h2>
      <table>
        <thead><tr><th>Pattern</th><th>Score</th><th>Value</th></tr></thead>
        <tbody>${scoreRows}</tbody>
      </table>
    </section>

    <section>
      <h2>8. Meeting Talking Points</h2>
      <ol>
        <li>The issue appears to fit the ${escapeHtml(top.name)} pattern because ${escapeHtml(top.useWhen.toLowerCase())}</li>
        <li>The first conversation should focus on whether the needed information exists and whether people trust it enough to reason from it.</li>
        <li>The pattern can support judgment, but accountability, interpretation, and expectation-setting remain human responsibilities.</li>
      </ol>
    </section>

    <footer>
      Based on the local PMI companion PDFs: Seven Patterns of AI Quick Reference Guide and Applying the Seven Patterns Step-by-Step Guide. This report is a reasoning aid for early conversations, not a technical design or implementation plan.
    </footer>
  </main>
</body>
</html>`;
}

async function downloadReport() {
  renderRecommendation();
  const html = reportHtml();

  if (!html || html.length < 1000) {
    showToast("Report could not be generated");
    return;
  }

  try {
    localStorage.setItem("aiPatternReportHtml", html);
    window.open("report.html", "_blank", "noopener");
    showToast("Report opened. Use Print or Save As.");
  } catch (error) {
    showToast("Report blocked by browser");
  }
}

function showToast(message = "Done") {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function resetForm() {
  $("#advisorForm").reset();
  state.selectedOutcomes.clear();
  state.selectedData.clear();
  document.querySelectorAll(".chip.active").forEach((chip) => chip.classList.remove("active"));
  setAutonomyLabel();
  renderRecommendation();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const chip = event.target.closest(".chip");
    if (chip) {
      const targetSet = chip.dataset.set === "outcomes" ? state.selectedOutcomes : state.selectedData;
      const id = chip.dataset.pattern;
      chip.classList.toggle("active");
      if (targetSet.has(id)) targetSet.delete(id);
      else targetSet.add(id);
      renderRecommendation();
    }

    const tab = event.target.closest(".tab");
    if (tab) {
      document.querySelectorAll(".tab").forEach((button) => button.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
      tab.classList.add("active");
      $(`#${tab.dataset.tab}Panel`).classList.add("active");
    }
  });

  ["issue", "area", "impact"].forEach((id) => {
    $(`#${id}`).addEventListener("input", renderRecommendation);
  });

  $("#autonomy").addEventListener("input", () => {
    setAutonomyLabel();
    renderRecommendation();
  });

  $("#diagnoseBtn").addEventListener("click", renderRecommendation);
  $("#resetBtn").addEventListener("click", resetForm);
  $("#copyBtn").addEventListener("click", copyBrief);
  $("#downloadBtn").addEventListener("click", downloadReport);
  $("#printBtn").addEventListener("click", () => window.print());
}

buildChips("outcomes", outcomes, "outcomes");
buildChips("dataSignals", dataSignals, "data");
renderPatternLibrary();
setAutonomyLabel();
bindEvents();
renderRecommendation();
