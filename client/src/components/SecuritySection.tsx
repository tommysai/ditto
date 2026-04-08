/**
 * SecuritySection - 安全与隐私展示区域
 * Design: 赛博朋克企业感 - 安全盾牌视觉 + 数据流动效果
 */
import { ShieldCheck, Lock, Eye, Server, Key, AlertTriangle } from "lucide-react";

const securityFeatures = [
  {
    icon: Server,
    title: "物理隔离部署",
    desc: "支持本地服务器、企业私有云，数据绝不出域",
    color: "#0EA5E9",
  },
  {
    icon: Lock,
    title: "端到端加密",
    desc: "所有通信采用 TLS 1.3 加密，静态数据 AES-256",
    color: "#06B6D4",
  },
  {
    icon: Key,
    title: "RBAC 权限管控",
    desc: "基于角色的细粒度访问控制，最小权限原则",
    color: "#a78bfa",
  },
  {
    icon: Eye,
    title: "全链路审计",
    desc: "每一步操作均有完整日志，可追溯、可审计",
    color: "#22c55e",
  },
  {
    icon: AlertTriangle,
    title: "人工审批机制",
    desc: "高危操作强制拦截，推送管理员手机端审批",
    color: "#f59e0b",
  },
  {
    icon: ShieldCheck,
    title: "沙箱隔离执行",
    desc: "所有 AI 动作在独立 Docker 容器中运行",
    color: "#f43f5e",
  },
];

export default function SecuritySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#060A10]">
      {/* 背景网格 */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* 发光中心 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0EA5E9]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 左侧 - 安全盾牌图 */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72">
              {/* 外圈旋转环 */}
              <div
                className="absolute inset-0 rounded-full border border-[#0EA5E9]/20"
                style={{ animation: "spin 20s linear infinite" }}
              />
              <div
                className="absolute inset-4 rounded-full border border-[#06B6D4]/15"
                style={{ animation: "spin 15s linear infinite reverse" }}
              />

              {/* 盾牌图片 */}
              <div className="absolute inset-8 clip-card-lg overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663323497882/8gmrqxNEbpPxG8xFVEgCCV/security-shield-5vxJyxML9r9n5TFDsxPPQw.webp"
                  alt="安全防护"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 浮动标签 */}
              <div className="absolute -top-4 -right-8 bg-[#0A1020]/90 border border-[#22c55e]/40 px-3 py-2 clip-card-sm">
                <div className="flex items-center gap-1.5">
                  <span className="status-dot" />
                  <span className="text-xs font-mono text-[#22c55e]">SECURE</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 bg-[#0A1020]/90 border border-[#0EA5E9]/40 px-3 py-2 clip-card-sm">
                <div className="text-xs font-mono text-[#0EA5E9]">ISO 27001</div>
                <div className="text-xs text-white/40">认证合规</div>
              </div>
            </div>

            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>

          {/* 右侧 - 安全特性 */}
          <div>
            <div className="number-tag mb-4">SECURITY_FIRST</div>
            <h2 className="font-['Sora'] font-extrabold text-3xl lg:text-4xl text-white mb-4">
              安全是<span className="gradient-text">第一优先级</span>
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              企业数据是核心资产。数字职工从架构设计之初就将安全置于最高优先级，每一层防护都经过严格的安全审计。
            </p>

            <div className="grid grid-cols-2 gap-3">
              {securityFeatures.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="p-4 bg-[#0A1020] border border-white/10 clip-card-sm hover:border-opacity-50 transition-all duration-300 group"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = color + "50";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center clip-card-sm mb-3"
                    style={{ background: color + "20" }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <div className="font-semibold text-sm text-white mb-1">{title}</div>
                  <div className="text-xs text-white/40 leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
