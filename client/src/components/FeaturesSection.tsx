/**
 * FeaturesSection - 六大核心功能模块
 * Design: 赛博朋克企业感 - 交错布局 + 切角卡片 + 悬停发光
 */
import { useState } from "react";
import {
  Lock, FolderOpen, Globe, Workflow,
  MessageCircle, Code2, ChevronRight
} from "lucide-react";

const features = [
  {
    id: "security",
    num: "01",
    icon: Lock,
    title: "私有化部署与隐私安全",
    subtitle: "核心基石",
    color: "#0EA5E9",
    badge: "CORE",
    summary: "全物理隔离部署，确保所有业务数据绝对不出企业内网。",
    points: [
      { title: "全物理隔离部署", desc: "支持本地服务器、企业私有云（Docker/K8s）一键部署" },
      { title: "最小权限原则（PoLP）", desc: "摒弃 Root 权限模式，每项任务按需申请权限" },
      { title: "人在回路（Human-in-the-loop）", desc: "高危操作强制拦截并推送管理员手机端一键审批" },
    ],
  },
  {
    id: "files",
    num: "02",
    icon: FolderOpen,
    title: "深度文件管理与知识治理",
    subtitle: "智能文档中枢",
    color: "#06B6D4",
    badge: "SMART",
    summary: "不仅能读取文件，更能像人类一样进行文件的分类、归档和版本控制。",
    points: [
      { title: "异构数据统一接管", desc: "本地/云盘文件的分类、重命名、归档和版本控制" },
      { title: "智能内容解析", desc: "内置 OCR 引擎，自动提取合同、发票关键字段并结构化存储" },
      { title: "权限融合检索", desc: "严格继承提问者在企业 OA 中的数据权限，防止越权访问" },
    ],
  },
  {
    id: "browser",
    num: "03",
    icon: Globe,
    title: "浏览器与跨系统自动化",
    subtitle: "无边界执行",
    color: "#a78bfa",
    badge: "AUTO",
    summary: "内置浏览器自动化引擎，可自主登录外部网站、填写表单、抓取数据。",
    points: [
      { title: "原生浏览器控制", desc: "内置 Playwright 引擎，自主登录网站、填写表单、下载报表" },
      { title: "抗反爬与验证码处理", desc: "拟人化操作轨迹，复杂验证码自动截图推送人工协助" },
      { title: "遗留系统打通", desc: "通过视觉识别（CV）和 UI 自动化操作无 API 的老旧系统" },
    ],
  },
  {
    id: "workflow",
    num: "04",
    icon: Workflow,
    title: "办公全流程自动化",
    subtitle: "SOP 智能编排",
    color: "#f59e0b",
    badge: "FLOW",
    summary: "可视化拖拽面板，将日常 SOP 固化为自动化工作流，一次配置永久执行。",
    points: [
      { title: "SOP 智能编排", desc: "可视化拖拽面板，将日常 SOP 固化为自动化工作流" },
      { title: "动态任务拆解", desc: "面对自然语言指令，自主拆解为多步骤任务并执行" },
      { title: "定时与触发执行", desc: "支持定时、Webhook、邮件到达等多种触发方式" },
    ],
  },
  {
    id: "interaction",
    num: "05",
    icon: MessageCircle,
    title: "多渠道交互与主动服务",
    subtitle: "差异化亮点",
    color: "#22c55e",
    badge: "UNIQUE",
    summary: "从\"被动响应\"升级为\"主动服务\"，7×24 小时监控业务指标主动预警。",
    points: [
      { title: "全域伴随式交互", desc: "在企微/钉钉对话框中 @ 数字职工，或在 Word/Excel 侧边栏直接调用" },
      { title: "主动预警与推送", desc: "监控业务指标，发现异常主动向负责人发送分析报告和建议" },
      { title: "多渠道统一管理", desc: "企微、钉钉、飞书、OA、Web 端统一接入，消息不遗漏" },
    ],
  },
  {
    id: "devops",
    num: "06",
    icon: Code2,
    title: "开发者与运维能力",
    subtitle: "企业级治理",
    color: "#f43f5e",
    badge: "DEV",
    summary: "双模开发生态 + 全链路可观测性 + 精细化成本管控，让 AI 运营透明可控。",
    points: [
      { title: "双模开发生态", desc: "业务人员低代码拖拽；IT 人员 Python/Node.js SDK 深度定制" },
      { title: "全链路可观测性", desc: "企业级仪表盘，实时展示运行状态、任务成功率、API 耗时" },
      { title: "精细化成本管控", desc: "Token 消耗预估、部门额度分配、超额熔断，成本 100% 透明" },
    ],
  },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* 背景 */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#0EA5E9]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7C3AED]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* 章节标题 */}
        <div className="flex items-start gap-4 mb-16">
          <div className="flex-shrink-0">
            <div className="number-tag">03</div>
            <div className="w-px h-12 bg-gradient-to-b from-[#0EA5E9] to-transparent mx-auto mt-2" />
          </div>
          <div>
            <h2 className="font-['Sora'] font-extrabold text-3xl lg:text-4xl text-white mb-3">
              六大<span className="gradient-text">核心功能</span>模块
            </h2>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              基于企业真实需求规划，每个模块都针对当前市场痛点进行了深度设计。
            </p>
          </div>
        </div>

        {/* 功能卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            return (
              <div
                key={feature.id}
                className="group relative p-6 bg-[#0A1020] clip-card border border-white/10 cursor-pointer transition-all duration-400 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  setActiveFeature(feature.id);
                  (e.currentTarget as HTMLElement).style.borderColor = feature.color + "50";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${feature.color}15`;
                }}
                onMouseLeave={(e) => {
                  setActiveFeature(null);
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* 角标 */}
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 text-xs font-mono clip-card-sm"
                  style={{ background: feature.color + "20", color: feature.color }}
                >
                  {feature.badge}
                </div>

                {/* 图标 */}
                <div
                  className="w-12 h-12 flex items-center justify-center clip-card mb-5"
                  style={{ background: feature.color + "15" }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>

                {/* 序号 */}
                <div className="number-tag mb-2">{feature.num} / {feature.subtitle}</div>

                {/* 标题 */}
                <h3 className="font-['Sora'] font-bold text-lg text-white mb-3 leading-tight">
                  {feature.title}
                </h3>

                {/* 摘要 */}
                <p className="text-sm text-white/50 leading-relaxed mb-5">{feature.summary}</p>

                {/* 功能点列表 */}
                <div className="space-y-2.5">
                  {feature.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ChevronRight
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 transition-colors"
                        style={{ color: feature.color + "80" }}
                      />
                      <div>
                        <span className="text-xs font-semibold text-white/80">{point.title}</span>
                        <span className="text-xs text-white/40 ml-1">— {point.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 底部发光线 */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${feature.color}60, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
