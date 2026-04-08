/**
 * PositioningSection - 产品定位与核心理念
 * Design: 赛博朋克企业感 - 不对称双栏 + 切角卡片
 */
import { Target, Zap, Lock, TrendingUp } from "lucide-react";

const coreValues = [
  {
    icon: Lock,
    title: "可控优先",
    desc: "最小权限原则（PoLP），每项任务按需申请权限，高危操作强制人工审批，数据绝对不出企业内网。",
    color: "#0EA5E9",
  },
  {
    icon: Zap,
    title: "主动执行",
    desc: "从被动响应升级为主动服务，7×24 小时监控业务指标，发现异常主动推送分析报告与处理建议。",
    color: "#06B6D4",
  },
  {
    icon: Target,
    title: "精准决策",
    desc: "双引擎驱动——LLM 负责意图理解与任务拆解，企业级 RAG 引擎结合私有知识库进行精准决策。",
    color: "#a78bfa",
  },
  {
    icon: TrendingUp,
    title: "成本透明",
    desc: "执行前预估 Token 消耗，支持部门级预算配额与实时熔断预警，彻底告别天价账单。",
    color: "#22c55e",
  },
];

export default function PositioningSection() {
  return (
    <section id="positioning" className="py-24 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* 章节标题 */}
        <div className="flex items-start gap-4 mb-16">
          <div className="flex-shrink-0">
            <div className="number-tag">01</div>
            <div className="w-px h-12 bg-gradient-to-b from-[#0EA5E9] to-transparent mx-auto mt-2" />
          </div>
          <div>
            <h2 className="font-['Sora'] font-extrabold text-3xl lg:text-4xl text-white mb-3">
              产品定位与<span className="gradient-text">核心理念</span>
            </h2>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              在人工智能从"感知理解"向"主动执行"演进的当下，传统对话式 AI 已无法满足企业对生产力提升的深度需求。
            </p>
          </div>
        </div>

        {/* 主内容 - 不对称双栏 */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* 左侧 - 核心定位说明 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-[#0A1020] clip-card-lg neon-border">
              <div className="text-xs font-mono text-[#0EA5E9]/60 mb-3">// PRODUCT_POSITIONING</div>
              <h3 className="font-['Sora'] font-bold text-xl text-white mb-4">
                企业级私有化部署的<br />
                <span className="text-[#0EA5E9]">"全能数字职工"</span>
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                精准切入当前 AI Agent 市场"个人玩具多，企业级产品少"的空白地带。通过私有化部署筑牢安全底座，通过浏览器与文件自动化赋予强大执行力，通过主动服务解决企业落地的最后一公里问题。
              </p>
            </div>

            {/* 核心口号 */}
            <div className="p-6 bg-gradient-to-br from-[#0EA5E9]/10 to-[#7C3AED]/10 border border-[#0EA5E9]/20 clip-card">
              <div className="font-['Sora'] font-extrabold text-2xl text-white leading-tight">
                "可控优先，<br />
                <span className="gradient-text">主动执行</span>"
              </div>
              <div className="mt-3 text-xs font-mono text-white/40">
                — 数字职工核心设计理念
              </div>
            </div>
          </div>

          {/* 右侧 - 四大核心价值 */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {coreValues.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="group p-5 bg-[#0A1020] border border-white/10 clip-card hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1"
                style={{ "--hover-color": color } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = color + "60";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center clip-card-sm mb-4"
                  style={{ background: color + "20" }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h4 className="font-['Sora'] font-bold text-white mb-2">{title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
