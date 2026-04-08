/**
 * ComparisonSection - 竞品分析与市场痛点
 * Design: 赛博朋克企业感 - 数据表格 + 雷达图风格对比
 */
import { useState } from "react";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const competitors = [
  {
    name: "OpenClaw",
    category: "开源Agent框架",
    color: "#f43f5e",
    tag: "极客玩具",
  },
  {
    name: "BetterYeah AI",
    category: "国内企业级平台",
    color: "#f59e0b",
    tag: "工作流编排",
  },
  {
    name: "Dify / Coze",
    category: "应用开发平台",
    color: "#a78bfa",
    tag: "LLM应用",
  },
  {
    name: "MS Copilot",
    category: "国际巨头生态",
    color: "#06B6D4",
    tag: "生态封闭",
  },
  {
    name: "数字职工",
    category: "企业级AI智能体",
    color: "#0EA5E9",
    tag: "全能方案",
    isUs: true,
  },
];

type Status = "yes" | "no" | "partial";

const capabilities: Array<{
  label: string;
  key: string;
  values: Status[];
}> = [
  {
    label: "私有化部署",
    key: "private",
    values: ["yes", "yes", "partial", "no", "yes"],
  },
  {
    label: "浏览器自动化",
    key: "browser",
    values: ["yes", "no", "no", "no", "yes"],
  },
  {
    label: "文件深度管理",
    key: "files",
    values: ["partial", "partial", "no", "partial", "yes"],
  },
  {
    label: "主动服务推送",
    key: "proactive",
    values: ["no", "partial", "no", "no", "yes"],
  },
  {
    label: "企业级权限管控",
    key: "rbac",
    values: ["no", "yes", "partial", "yes", "yes"],
  },
  {
    label: "成本透明管控",
    key: "cost",
    values: ["no", "partial", "partial", "yes", "yes"],
  },
  {
    label: "开发者SDK",
    key: "sdk",
    values: ["yes", "yes", "yes", "partial", "yes"],
  },
  {
    label: "全链路审计",
    key: "audit",
    values: ["no", "partial", "no", "yes", "yes"],
  },
];

function StatusIcon({ status }: { status: Status }) {
  if (status === "yes") return <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />;
  if (status === "no") return <XCircle className="w-4 h-4 text-[#f43f5e]/60" />;
  return <AlertCircle className="w-4 h-4 text-[#f59e0b]/80" />;
}

const painPoints = [
  {
    title: "安全与效率的矛盾",
    desc: "OpenClaw 赋予 AI 过大权限导致安全危机（512个漏洞，1.5万实例可被RCE），而 Copilot 为保安全牺牲了 AI 的推理与执行能力。",
    color: "#f43f5e",
    icon: "⚠️",
  },
  {
    title: "被动响应与主动服务的缺失",
    desc: "现有产品几乎全部是\"指令驱动\"（用户问，AI答/做），缺乏基于业务状态的\"主动预警与服务\"能力。",
    color: "#f59e0b",
    icon: "💤",
  },
  {
    title: "黑盒运行与成本失控",
    desc: "企业无法精细化管控 AI 的操作轨迹与 Token 消耗，OpenClaw 默认后台持续唤醒，用户常收到天价账单。",
    color: "#a78bfa",
    icon: "💸",
  },
];

export default function ComparisonSection() {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <section id="comparison" className="py-24 relative overflow-hidden bg-[#060A10]">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container relative z-10">
        {/* 章节标题 */}
        <div className="flex items-start gap-4 mb-16">
          <div className="flex-shrink-0">
            <div className="number-tag">04</div>
            <div className="w-px h-12 bg-gradient-to-b from-[#0EA5E9] to-transparent mx-auto mt-2" />
          </div>
          <div>
            <h2 className="font-['Sora'] font-extrabold text-3xl lg:text-4xl text-white mb-3">
              市场<span className="gradient-text">竞品分析</span>与痛点洞察
            </h2>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              通过对国内外 20+ 款产品的调研，我们发现当前市场存在明显的企业级应用空白。
            </p>
          </div>
        </div>

        {/* 三大痛点 */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="p-6 bg-[#0A1020] clip-card border border-white/10 hover:border-opacity-50 transition-all duration-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = point.color + "50";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3 className="font-['Sora'] font-bold text-white mb-3">{point.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{point.desc}</p>
              <div
                className="mt-4 h-0.5 w-12"
                style={{ background: point.color }}
              />
            </div>
          ))}
        </div>

        {/* 竞品对比表格 */}
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            {/* 表头 */}
            <div className="grid grid-cols-[200px_repeat(5,1fr)] gap-2 mb-3">
              <div className="px-3 py-2 text-xs font-mono text-white/30">能力维度</div>
              {competitors.map((comp, i) => (
                <div
                  key={comp.name}
                  className={`px-3 py-3 text-center clip-card-sm transition-all duration-300 ${
                    comp.isUs ? "bg-[#0EA5E9]/15 border border-[#0EA5E9]/40" : "bg-[#0A1020] border border-white/10"
                  }`}
                  onMouseEnter={() => setHoveredCol(i)}
                  onMouseLeave={() => setHoveredCol(null)}
                >
                  <div
                    className="text-xs font-mono mb-0.5"
                    style={{ color: comp.color + (comp.isUs ? "" : "80") }}
                  >
                    {comp.tag}
                  </div>
                  <div className={`font-['Sora'] font-bold text-sm ${comp.isUs ? "text-[#0EA5E9]" : "text-white/70"}`}>
                    {comp.name}
                  </div>
                  <div className="text-xs text-white/30 mt-0.5">{comp.category}</div>
                </div>
              ))}
            </div>

            {/* 数据行 */}
            {capabilities.map((cap, rowIdx) => (
              <div
                key={cap.key}
                className={`grid grid-cols-[200px_repeat(5,1fr)] gap-2 mb-1.5 ${
                  rowIdx % 2 === 0 ? "bg-white/2" : ""
                }`}
              >
                <div className="px-3 py-3 flex items-center text-sm text-white/60 font-medium">
                  {cap.label}
                </div>
                {cap.values.map((status, colIdx) => (
                  <div
                    key={colIdx}
                    className={`px-3 py-3 flex items-center justify-center clip-card-sm transition-all duration-200 ${
                      competitors[colIdx].isUs
                        ? "bg-[#0EA5E9]/10"
                        : hoveredCol === colIdx
                        ? "bg-white/5"
                        : ""
                    }`}
                  >
                    <StatusIcon status={status} />
                  </div>
                ))}
              </div>
            ))}

            {/* 图例 */}
            <div className="flex items-center gap-6 mt-6 px-3 text-xs text-white/40">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e]" />
                完全支持
              </div>
              <div className="flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#f59e0b]/80" />
                部分支持
              </div>
              <div className="flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-[#f43f5e]/60" />
                不支持
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
