import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../components/ArticleLayout';

const ClearedAiSalaryGuide = () => (
    <ArticleLayout slug="cleared-defense-ai-engineer-salary-guide-dc">
        <p className="lede">
            In the Washington, D.C. and Northern Virginia technical market, clearance level —
            not just seniority — is the single biggest multiplier on engineering compensation.
            Here is how the numbers break down in 2026, and why the salary band in the job
            posting is almost never the number that closes the hire.
        </p>

        <p>
            This guide is written for hiring managers and founders trying to budget a cleared
            or defense-adjacent engineering hire. It covers AI/ML, FPGA and hardware, and
            reverse-engineering roles — the areas where the talent pool is thinnest and the
            compensation math is least intuitive.
        </p>

        <div className="callout">
            <strong>A note on the numbers.</strong> The ranges below are directional estimates
            for the DC / Northern Virginia market drawn from placement activity and market
            conversations, not a formal salary survey. Treat them as a starting budget, not a
            quote. Total compensation for individual candidates varies widely with clearance,
            program, and scarcity.
        </div>

        <h2>Why cleared engineers cost more</h2>
        <p>
            An active security clearance is a scarce, slow-to-produce asset. A full-scope
            polygraph can take a year or more to adjudicate, and a candidate who already holds
            one can start delivering on a contract immediately. That time-to-productivity is
            worth a premium to any employer billing against a program — so cleared candidates
            command one, and they know it.
        </p>
        <p>
            The practical effect: two engineers with identical skills can be separated by
            30–40% in total compensation purely on the basis of clearance level and currency.
            The scarcer the clearance and the rarer the technical specialty, the steeper the
            curve.
        </p>

        <h2>2026 compensation ranges (DC / Northern Virginia)</h2>
        <p>
            Figures are approximate total cash compensation (base plus typical bonus) for
            full-time roles. Uncleared figures assume the same role at a commercial employer in
            the same market.
        </p>

        <h3>AI / ML engineers</h3>
        <table>
            <thead>
                <tr><th>Level</th><th>Uncleared</th><th>Cleared (TS/SCI)</th></tr>
            </thead>
            <tbody>
                <tr><td>Mid (3–6 yrs)</td><td>$155k–$195k</td><td>$185k–$235k</td></tr>
                <tr><td>Senior (7–10 yrs)</td><td>$195k–$250k</td><td>$235k–$300k</td></tr>
                <tr><td>Staff / Principal</td><td>$250k–$330k+</td><td>$300k–$400k+</td></tr>
            </tbody>
        </table>

        <h3>FPGA / hardware engineers</h3>
        <table>
            <thead>
                <tr><th>Level</th><th>Uncleared</th><th>Cleared (TS/SCI)</th></tr>
            </thead>
            <tbody>
                <tr><td>Mid (3–6 yrs)</td><td>$140k–$180k</td><td>$170k–$220k</td></tr>
                <tr><td>Senior (7–10 yrs)</td><td>$180k–$230k</td><td>$220k–$285k</td></tr>
                <tr><td>Staff / Principal</td><td>$230k–$300k+</td><td>$285k–$370k+</td></tr>
            </tbody>
        </table>

        <h3>Reverse engineers / vulnerability researchers</h3>
        <p>
            This is the scarcest category in the market, and compensation reflects it. Cleared
            senior reverse engineers and vulnerability researchers frequently clear{' '}
            <strong>$250k–$400k+</strong> in total cash, with the very top of the market —
            full-scope-poly researchers with a track record — negotiating well beyond that.
        </p>

        <h2>What moves a candidate to the top of the band</h2>
        <ul>
            <li><strong>Clearance currency and scope.</strong> A current TS/SCI with a full-scope polygraph is worth materially more than a lapsed Secret.</li>
            <li><strong>Program-specific experience.</strong> Direct experience on the customer’s mission or toolchain shortens ramp and raises leverage.</li>
            <li><strong>Rarity of specialty.</strong> RF, embedded security, and low-level firmware skills carry premiums over general software.</li>
            <li><strong>Willingness to be on-site.</strong> Fully on-site SCIF roles pay more than hybrid because the candidate pool is smaller.</li>
        </ul>

        <h2>Why the posted band rarely closes the hire</h2>
        <p>
            Two reasons. First, the strongest cleared candidates are almost always{' '}
            <strong>passive</strong> — already employed on a program, not scanning job boards —
            so the offer has to beat a comfortable status quo, not just clear a market minimum.
            Second, cleared compensation is opaque: there is no public comp data for classified
            programs, so candidates anchor on what a peer told them over lunch, and employers
            anchor on a two-year-old band. The gap between those two numbers is where searches
            stall.
        </p>

        <p>
            Closing it takes a current market map — who is paying what, right now, for this
            exact profile — which is one of the deliverables of a{' '}
            <Link to="/services">retained search</Link>. Getting the compensation architecture
            right before the first conversation is usually the difference between an accepted
            offer and a restart.
        </p>

        <h2>The short version</h2>
        <ul>
            <li>Clearance can add 25–40% to total compensation for the same technical role.</li>
            <li>Reverse engineering and vulnerability research are the scarcest, highest-paid specialties in the DC market.</li>
            <li>The best cleared candidates are passive; budget to beat their current package, not the market floor.</li>
            <li>Benchmark against current data, not last year’s band — the market moves fast.</li>
        </ul>
    </ArticleLayout>
);

export default ClearedAiSalaryGuide;
