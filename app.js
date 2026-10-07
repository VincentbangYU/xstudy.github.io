'use strict';
const chinese = {
skip:'跳至正文',headerLabel:'AI × 教育 · 新加坡',contactCta:'找到 XStudy',heroTag:'创作者主导 · AI 辅助制作',
headline1:'英语学习，',headline2:'由人来教，',headline3:'用 AI 来做。',
heroDesc:'XStudy 从具体学习难点出发，用 AI 辅助脚本、视觉素材与动画制作，把英语讲成清楚的双语课程。下一步，我们计划基于 Claude 做个性化英语练习。',
roadmapCta:'查看 Claude 产品规划',heroStage:'教学内容已发布。<br>AI 练习产品计划中。',boardTag:'我们在做什么',
todayLabel:'现在 / 已发布的教学内容',todayTitle:'已在运转的<br>内容制作流程。',todayDesc:'创作者的教学想法 + AI 辅助制作 + Remotion 动画 + 本人声音。',stackHuman:'人工审核',
nextLabel:'下一步 / 计划接入 CLAUDE',nextTitle:'能回应学习者的<br>英语练习引擎。',nextDesc:'通过 Claude API，根据学习水平提供解释、反馈与结构化练习。',bottomSticker:'从教学内容，走向个性化练习',
tractionLabel:'有真实受众，<br>继续做产品。',tractionDate:'创作者提供的平台概数 · 2026 年 10 月 7 日',statRed:'小红书粉丝',statWechat:'微信视频号粉丝',statPosts:'小红书原创内容',
roadmapTag:'为什么用 CLAUDE / 产品规划',roadmapTitle:'同一个知识点，<br>适合不同的学习者。',
problem:'同一种解释，很难适合所有人。我们计划用 Claude，把已有教学内容转成能根据学习水平和具体错误调整的练习。',
feature1Title:'按我的水平，<br>把难点讲清楚。',feature1Desc:'计划用 Claude，根据学习者的水平和具体问题，调整双语解释与例句。',feature1Foot:'输入：学习水平 + 具体问题',
feature2Title:'告诉我原因，<br>让我再试一次。',feature2Desc:'计划用 Claude，解释词汇与写作中的错误，再围绕同一个知识点提供练习。',feature2Foot:'输入：学习者的作答',
feature3Title:'让课程制作，<br>更高效、更清楚。',feature3Desc:'计划用 Claude，辅助组织脚本与结构化练习，接入 Remotion 制作流程，发布前由创作者审核。',feature3Foot:'输入：创作者的教学提纲',
planStatus:'计划中',roadmapNote:'以上为拟接入 Claude API 的功能。面向学习者的 Claude 产品目前尚未上线。',
contactTag:'项目背后的创作者',contactTitle:'我是 Vincent，<br>我在做 XStudy。',founderDesc:'我在新加坡，亲自选题、组织解释，并为课程提供自己的声音。你可以通过这些账号观看已发布的教学内容，或联系我。',
socialRed:'小红书 / XIAOHONGSHU',socialWechat:'微信视频号 / WECHAT CHANNELS',copy:'复制',socialHelp:'在对应 App 中搜索以上账号名称。',resourcesLink:'学习资源',footerLine:'由人来教，用 AI 帮助制作。'
};
const english = {};
document.querySelectorAll('[data-key]').forEach(node => { english[node.dataset.key] = node.innerHTML; });
let language = 'en';
function applyLanguage(value) {
language = value;
document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
document.querySelectorAll('[data-key]').forEach(node => { node.innerHTML = language === 'zh' ? chinese[node.dataset.key] : english[node.dataset.key]; });
const button = document.getElementById('language');
button.textContent = language === 'zh' ? 'EN' : '中文';
button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : 'Switch to Chinese');
document.title = language === 'zh' ? 'XStudy — 由人来教，用 AI 来做' : 'XStudy — Human teaching. AI-assisted English learning.';
document.getElementById('copy-status').textContent = '';
try { localStorage.setItem('xstudy-language', language); } catch (_) {}
}
document.getElementById('language').addEventListener('click', () => applyLanguage(language === 'en' ? 'zh' : 'en'));
async function copyHandle(value) {
const activeElement = document.activeElement;
try {
if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(value);
else {
const input = document.createElement('textarea'); input.value = value; input.setAttribute('readonly', '');
input.style.position = 'fixed'; input.style.opacity = '0';
document.body.appendChild(input); input.select();
const success = document.execCommand('copy'); input.remove(); activeElement?.focus();
if (!success) throw new Error('Clipboard unavailable');
}
document.getElementById('copy-status').textContent = (language === 'zh' ? '已复制：' : 'Copied: ') + value;
} catch (_) { document.getElementById('copy-status').textContent = (language === 'zh' ? '请手动复制：' : 'Please copy this name: ') + value; }
}
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', () => copyHandle(button.dataset.copy)));
try { if (localStorage.getItem('xstudy-language') === 'zh') language = 'zh'; } catch (_) {}
applyLanguage(language);
