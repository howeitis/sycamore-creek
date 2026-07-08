import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../components/ArticleLayout';

const RetainedVsContingencyVsEmbedded = () => (
    <ArticleLayout slug="retained-vs-contingency-vs-embedded-recruiting">
        <p className="lede">
            Most hiring teams pick a recruiting model by habit, or by whoever emailed them
            last. But retained search, contingency recruiting, and embedded recruiting solve
            genuinely different problems. Here is a straight comparison — and a simple way to
            decide which one you actually need.
        </p>

        <h2>The three models at a glance</h2>
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Retained</th>
                    <th>Contingency</th>
                    <th>Embedded</th>
                </tr>
            </thead>
            <tbody>
                <tr><td><strong>You pay</strong></td><td>In stages, across the search</td><td>Only on placement</td><td>Flat monthly / weekly rate</td></tr>
                <tr><td><strong>Exclusivity</strong></td><td>Exclusive</td><td>Non-exclusive</td><td>Exclusive (your team)</td></tr>
                <tr><td><strong>Recruiter incentive</strong></td><td>Fit and completion</td><td>Speed to placement</td><td>Throughput for your pipeline</td></tr>
                <tr><td><strong>Best for</strong></td><td>Critical, senior, scarce, or confidential roles</td><td>High-volume, well-defined, non-urgent roles</td><td>Sustained hiring across many roles</td></tr>
            </tbody>
        </table>

        <h2>Retained search</h2>
        <p>
            In a retained engagement, a firm exclusively owns a role from end to end — market
            mapping, scorecard, outreach, evaluation, and offer negotiation — and is paid in
            stages across the life of the search rather than only on placement. Because the fee
            is committed, the firm dedicates senior bandwidth from day one.
        </p>
        <p><strong>Use it when:</strong> a mis-hire is expensive, the role is senior or highly
            specialized, the qualified pool is small, the search is confidential, or the
            candidates you want are passive and won’t respond to a posting. This is the model
            for leadership hires, cleared and defense engineering, and niche technical roles.
        </p>
        <p><strong>The trade-off:</strong> you commit before the hire is made. In exchange you
            get dedicated effort, a rigorous process, and market intelligence you keep whether
            or not you hire.
        </p>

        <h2>Contingency recruiting</h2>
        <p>
            A contingency recruiter is paid only if they place a candidate, and they usually
            work the role non-exclusively alongside other recruiters and your own team. That
            structure rewards speed and volume: get a reasonable candidate in front of the
            client before anyone else does.
        </p>
        <p><strong>Use it when:</strong> the role is well-defined, the talent pool is deep, and
            you are not under acute pressure on quality or confidentiality. Contingency can be
            efficient for filling repeatable, mid-level roles.
        </p>
        <p><strong>The trade-off:</strong> the incentive is placement, not fit. Because no one
            is exclusively accountable, hard or sensitive roles tend to sit untouched — a
            recruiter’s time flows to whichever search is easiest to close.
        </p>

        <h2>Embedded recruiting</h2>
        <p>
            Embedded recruiting places a recruiter <em>inside</em> your team for a defined
            period, working in your ATS and Slack, attending standups, and running intake with
            your hiring managers — functioning as an extension of your internal talent function
            for a flat rate rather than a per-hire fee.
        </p>
        <p><strong>Use it when:</strong> you have sustained hiring across many roles — typically
            a startup scaling after a funding round — but no internal recruiting team, or a
            team that can’t absorb the current volume. You get capacity and process without the
            cost and commitment of a full-time hire.
        </p>
        <p><strong>The trade-off:</strong> it’s a bandwidth solution, not a headhunting one. For
            a single, hard, senior search, a retained engagement is a better tool.
        </p>

        <h2>A simple way to decide</h2>
        <ul>
            <li><strong>One critical or scarce role?</strong> → Retained search.</li>
            <li><strong>Many roles, ongoing, and you lack recruiting capacity?</strong> → Embedded.</li>
            <li><strong>A repeatable, well-defined role with a deep talent pool and no urgency?</strong> → Contingency.</li>
        </ul>
        <p>
            The models aren’t mutually exclusive — a scaling company might run embedded
            recruiting for its general pipeline and a retained search for the one VP hire that
            can’t go wrong. The mistake is using a volume tool for a scarcity problem, or paying
            for dedicated search on a role a job posting would fill.
        </p>

        <div className="callout">
            Sycamore Creek offers <Link to="/services">retained search and embedded
            recruiting</Link>. If you’re not sure which fits your situation, that’s exactly the
            conversation to start with — the answer is sometimes “neither, yet.”
        </div>
    </ArticleLayout>
);

export default RetainedVsContingencyVsEmbedded;
