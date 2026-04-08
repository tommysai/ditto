/**
 * DifferentiationSection - 差异化竞争策略
 * Design: 赛博朋克企业感 - 左右对比布局 + 切角卡片
 */
import { Shield, Package, DollarSign, Zap, Rocket } from "lucide-react";

const diffs = [
  {
    icon: Shield,
    dimension: "权限与安全",
    them: {
      label: "OpenClaw 现状",
      desc: "默认 Root 权限，无隔离，极易被恶意插件控制，已发现 512 个安全漏洞，1.5 万实例可被远程代码执行（RCE）。",
      color: "#f43f5e",
    },
    us: {
      label: "数字职工方案",
      desc: "任务级细粒度授权，Docker 沙箱隔离，高危操作强制\"人在回路\"审批，完整操作审计日志。",
      color: "#0EA5E9",
    },
  },
  {
    icon: Package,
    dimension: "生态治理",
    them: {
      label: "OpenClaw 现状",
      desc: "插件市场先发布后审核，已发现 1184 个恶意插件，用户安装即中招，数据安全无法保障。",
      color: "#f43f5e",
    },
    us: {
      label: "数字职工方案",
      desc: "企业级私有技能库，官方提供经过严格安全审计的标准化技能，内部自定义技能需经 IT 部门审核后上架。",
      color: "#0EA5E9",
    },
  },
  {
    icon: DollarSign,
    dimension: "成本管理",
    them: {
      label: "OpenClaw 现状",
      desc: "默认后台持续唤醒，无额度限制，用户常收到天价账单，成本完全不可预测。",
      color: "#f43f5e",
    },
    us: {
      label: "数字职工方案",
      desc: "执行前预估 Token 消耗，支持部门级预算配额与实时熔断预警，让 AI 成本 100% 透明可控。",
      color: "#0EA5E9",
    },
  },
  {
    icon: Zap,
    dimension: "服务模式",
    them: {
      label: "OpenClaw 现状",
      desc: "纯被动响应，用户下达指令才执行，无法主动感知业务异常，错过最佳处理时机。",
      color: "#f43f5e",
    },
    us: {
      label: "数字职工方案",
      desc: "具备事件驱动（Event-driven）能力，基于业务规则主动发现问题并推送解决方案，从工具升级为伙伴。",
      color: "#0EA5E9",
    },
  },
  {
    icon: Rocket,
    dimension: "部署门槛",
    them: {
      label: "OpenClaw 现状",
      desc: "需配置 Docker、Node.js、API 密钥，技术门槛高，催生了大量\"代装经济\"，企业难以自主运维。",
      color: "#f43f5e",
    },
    us: {
      label: "数字职工方案",
      desc: "提供企业级一键部署包（支持主流国产化信创环境），配备完善的实施交付与陪跑服务，最快 3 天上线。",
      color: "#0EA5E9",
    },
  },
];

export default function DifferentiationSection() {
  return (
    <section id="differentiation" className="py-24 relative overflow-hidden">
      {/* 背景 */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0EA5E9]/4 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container relative z-10">
        {/* 章节标题 */}
        <div className="flex items-start gap-4 mb-16">
          <div className="flex-shrink-0">
            <div className="number-tag">05</div>
            <div className="w-px h-12 bg-gradient-to-b from-[#0EA5E9] to-transparent mx-auto mt-2" />
          </div>
          <div>
            <h2 className="font-['Sora'] font-extrabold text-3xl lg:text-4xl text-white mb-3">
              差异化<span className="gradient-text">竞争策略</span>
            </h2>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              OpenClaw 的爆火证明了"可执行 Agent"的巨大市场需求，但其安全漏洞和粗放设计使其沦为"极客玩具"而非"企业工具"。
            </p>
          </div>
        </div>

        {/* 对比卡片 */}
        <div className="space-y-5">
          {diffs.map(({ icon: Icon, dimension, them, us }) => (
            <div key={dimension} className="grid md:grid-cols-[120px_1fr_1fr] gap-4 items-stretch">
              {/* 维度标签 */}
              <div className="flex md:flex-col items-center justify-center gap-3 p-4 bg-[#0A1020] border border-white/10 clip-card">
                <div className="w-10 h-10 flex items-center justify-center bg-[#0EA5E9]/15 clip-card-sm">
                  <Icon className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <span className="font-['Sora'] font-bold text-sm text-white text-center">{dimension}</span>
              </div>

              {/* 竞品现状 */}
              <div className="p-5 bg-[#0A1020] border border-[#f43f5e]/20 clip-card relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f43f5e]/60 to-transparent" />
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#f43f5e]" />
                  <span className="text-xs font-mono text-[#f43f5e]/80">{them.label}</span>
                </div>
                <p className="text-sm text-white/55 leading-relaxed">{them.desc}</p>
              </div>

              {/* 我们的方案 */}
              <div className="p-5 bg-[#0EA5E9]/8 border border-[#0EA5E9]/30 clip-card relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0EA5E9]/80 to-transparent" />
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                  <span className="text-xs font-mono text-[#0EA5E9]/80">{us.label}</span>
                </div>
                <p className="text-sm text-white/75 leading-relaxed">{us.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 总结卡片 */}
        <div className="mt-12 p-8 bg-gradient-to-br from-[#0EA5E9]/10 to-[#7C3AED]/10 border border-[#0EA5E9]/30 clip-card-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="number-tag mb-3">CONCLUSION</div>
              <h3 className="font-['Sora'] font-extrabold text-2xl text-white mb-4">
                精准切入市场空白地带
              </h3>
              <p className="text-white/60 leading-relaxed">
                本"数字职工"产品精准切入了当前 AI Agent 市场"个人玩具多，企业级产品少"的空白地带。它不仅是对 OpenClaw 等开源框架的全面企业级重构，更是企业迈向全面智能化运营的核心基础设施。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "安全漏洞", value: "0", desc: "零已知高危漏洞" },
                { label: "部署时间", value: "3天", desc: "最快上线周期" },
                { label: "成本透明度", value: "100%", desc: "Token 消耗可控" },
                { label: "主动服务", value: "7×24", desc: "全天候监控预警" },
              ].map(({ label, value, desc }) => (
                <div key={label} className="p-4 bg-[#080C14]/60 clip-card-sm border border-white/10 text-center">
                  <div className="font-['Sora'] font-extrabold text-2xl gradient-text">{value}</div>
                  <div className="text-xs font-semibold text-white/70 mt-1">{label}</div>
                  <div className="text-xs text-white/30 mt-0.5">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
