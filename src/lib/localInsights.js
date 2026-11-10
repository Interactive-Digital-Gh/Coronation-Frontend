// Insight posts that live in the frontend instead of the CMS.
//
// cmsCache merges these into the CMS blog endpoints, so they appear on the
// insights pages, the "Latest Insights" cards and their own detail pages
// exactly like CMS posts. Each entry uses the same shape as the CMS response.
// `main_image` is an imported asset URL, which cmsImage() leaves untouched.
import ciigVpElect from "../assets/purpleinsight/ciig-vp-elect.jpeg";

export const LOCAL_INSIGHTS = [
    {
        id: "dr-yaw-adom-boateng-ciig-vice-president-elect",
        caption: "Coronation Insurance Ghana MD, Dr Yaw Adom-Boateng, Earns Top CIIG Leadership Role",
        excerpt: "The Managing Director of Coronation Insurance Ghana, Dr Yaw Adom-Boateng, has been elected Vice President-Elect of the Chartered Institute of Insurers Ghana (CIIG).",
        category: "News",
        main_image: ciigVpElect,
        pdf_file: null,
        created_at: "2026-11-10T08:00:00Z",
        body: `
<p>The Managing Director of Coronation Insurance Ghana, Dr Yaw Adom-Boateng, has been elected Vice President-Elect of the Chartered Institute of Insurers Ghana (CIIG), following a unanimous vote of confidence at the Institute’s Annual General Meeting (AGM) held last week at the Lancaster Hotel in Kumasi.</p>
<p>His election represents a significant professional milestone and recognition of his leadership, industry experience and contribution to Ghana’s insurance sector.</p>
<p>The appointment comes at an important time for the insurance industry, as it continues to navigate changing customer expectations, technological advancements and the need to deepen insurance penetration across the country. Strong industry leadership and collaboration remain essential to building public confidence, promoting professionalism and positioning insurance as a key contributor to Ghana’s economic development.</p>
<p>As Managing Director of Coronation Insurance Ghana, Dr Adom-Boateng provides strategic leadership for the company's operations, business development and growth agenda. His approach reflects a commitment to strengthening the company's market position while championing innovation, service excellence and the delivery of relevant insurance solutions to individuals and businesses.</p>
<p>His election also highlights Coronation Insurance Ghana’s growing contribution to leadership and professional development within the insurance industry.</p>
<p>The Chartered Institute of Insurers Ghana is a leading professional body committed to advancing insurance education, professional standards, ethical conduct and excellence among practitioners. Its leadership plays an important role in shaping the direction of the profession and supporting the development of a resilient and competitive insurance industry.</p>
<p>Dr Adom-Boateng’s election to the Institute’s leadership is expected to provide an opportunity to contribute further to these objectives, drawing on his experience in the insurance sector and his understanding of the industry's evolving landscape.</p>
<p>Commenting on the achievement, Coronation Insurance Ghana celebrates the recognition as a testament to Dr Adom-Boateng’s professional standing and leadership within the industry. The company remains committed to supporting initiatives that advance the insurance profession and strengthen the sector's contribution to national development.</p>
<p>Coronation Insurance Ghana congratulates Dr Yaw Adom-Boateng on this well-deserved achievement and wishes him success in his new leadership responsibility.</p>
`.trim(),
    },
];

const stripTags = (value) => (value || "").replace(/<\/?[^>]+(>|$)/g, "").trim().toLowerCase();
const newestFirst = (a, b) => new Date(b.created_at) - new Date(a.created_at);

export function findLocalInsight(id) {
    return LOCAL_INSIGHTS.find((post) => String(post.id) === String(id));
}

// Rewrites a CMS blog response so it includes the local posts.
// Returns the original body untouched for any other endpoint or bad payload.
export function mergeLocalInsights(url, body) {
    const path = url.split("?")[0];
    let data;
    try {
        data = JSON.parse(body);
    } catch {
        return body;
    }
    if (!Array.isArray(data)) return body;

    const cardsOnly = ({ body: _body, ...card }) => card; // eslint-disable-line no-unused-vars

    if (path.endsWith("/api/published-blogs/cards")) {
        return JSON.stringify([...LOCAL_INSIGHTS.map(cardsOnly), ...data].sort(newestFirst));
    }
    if (path.endsWith("/api/published-blogs/cards/latest-two")) {
        return JSON.stringify([...LOCAL_INSIGHTS.map(cardsOnly), ...data].sort(newestFirst).slice(0, 2));
    }
    if (path.endsWith("/api/blog-categories")) {
        const known = new Set(data.map((c) => stripTags(c.category)));
        const extra = [...new Set(LOCAL_INSIGHTS.map((p) => p.category))]
            .filter((name) => !known.has(stripTags(name)))
            .map((name) => ({ category: name }));
        return JSON.stringify([...data, ...extra]);
    }
    return body;
}

