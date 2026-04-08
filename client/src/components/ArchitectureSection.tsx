/**
 * ArchitectureSection - 五层神经系统架构
 * Design: 赛博朋克企业感 - 层级展示 + 连线动效
 */
import { useState } from "react";
import { Eye, Brain, Zap, MessageSquare, Shield } from "lucide-react";

const layers = [
  {
    id: "perception",
    num: "01",
    en: "Perception Layer",
    zh: "感知层",
    icon: Eye,
    color: "#06B6D4",
    desc: "多模态输入与系统级感知",
    details: [
      "支持文本、语音、图像、文档（PDF/Word/Excel）的解析",
      "实时监控指定文件夹变动、邮件到达、数据库状态",
      "业务系统 Webhook 事件接收与处理",
    ],
  },
  {
    id: "cognition",
    num: "02",
    en: "Cognition Layer",
    zh: "认知层",
    icon: Brain,
    color: "#0EA5E9",
    desc: "双引擎驱动与记忆系统",
    details: [
      "LLM 大语言模型负责意图理解与任务拆解",
      "企业级 RAG 引擎结合私有知识库进行精准决策",
      "短期工作流记忆 + 长期用户偏好/企业 SOP 记忆",
    ],
  },
  {
    id: "action",
    num: "03",
    en: "Action Layer",
    zh: "行动层",
    icon: Zap,
    color: "#a78bfa",
    desc: "原子化技能库与 RPA 融合引擎",
    details: [
      "文件操作、浏览器控制、API 调用封装为标准化原子技能",
      "结合传统 RPA 稳定性与 AI 灵活性处理跨系统任务",
      "可编排的技能组合，支持复杂多步骤任务执行",
    ],
  },
  {
    id: "interaction",
    num: "04",
    en: "Interaction Layer",
    zh: "交互层",
    icon: MessageSquare,
    color: "#f59e0b",
    desc: "全渠道触点与主动服务",
    details: [
      "无缝对接企业微信、钉钉、飞书、内部 OA 及自研 Web 端",
      "主动预警推送：发现业务异常主动通知相关负责人",
      "全域伴随式交互，无需登录特定后台即可下达任务",
    ],
  },
  {
    id: "governance",
    num: "05",
    en: "Governance Layer",
    zh: "安全治理层",
    icon: Shield,
    color: "#22c55e",
    desc: "沙箱隔离与权限管控",
    details: [
      "所有执行动作在独立 Docker 沙箱中运行",
      "严格遵循 RBAC 基于角色的访问控制",
      "高危操作强制人工审批，完整操作审计日志",
    ],
  },
];

export default function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState("cognition");

  const active = layers.find((l) => l.id === activeLayer)!;

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-[#060A10]">
      {/* 背景装饰 */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5E9]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* 章节标题 */}
        <div className="flex items-start gap-4 mb-16">
          <div className="flex-shrink-0">
            <div className="number-tag">02</div>
            <div className="w-px h-12 bg-gradient-to-b from-[#0EA5E9] to-transparent mx-auto mt-2" />
          </div>
          <div>
            <h2 className="font-['Sora'] font-extrabold text-3xl lg:text-4xl text-white mb-3">
              核心架构：<span className="gradient-text">五层神经系统</span>
            </h2>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              既聪明能干，又安全可控。五层架构确保数字职工在企业环境中稳定、高效、安全地运行。
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 左侧 - 架构图 */}
          <div className="relative">
            {/* 架构图片 */}
            <div className="clip-card-lg overflow-hidden border border-[#0EA5E9]/20 mb-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663323497882/8gmrqxNEbpPxG8xFVEgCCV/architecture-visual-gXYe7xoHbztsEzej5kGcHX.webp"
                alt="五层神经系统架构"
                className="w-full h-auto"
              />
            </div>

            {/* 层级选择器 */}
            <div className="space-y-2">
              {layers.map((layer) => {
                const Icon = layer.icon;
                const isActive = layer.id === activeLayer;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`w-full flex items-center gap-4 p-3 clip-card-sm text-left transition-all duration-300 ${
                      isActive
                        ? "bg-opacity-20 border"
                        : "bg-[#0A1020] border border-white/5 hover:border-white/20"
                    }`}
                    style={
                      isActive
                        ? {
                            background: layer.color + "15",
                            borderColor: layer.color + "50",
                            boxShadow: `0 0 20px ${layer.color}10`,
                          }
                        : {}
                    }
                  >
                    <div
                      className="w-8 h-8 flex-shrink-0 flex items-center justify-center clip-card-sm"
                      style={{ background: layer.color + "20" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: layer.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs" style={{ color: layer.color + "80" }}>
                          {layer.num}
                        </span>
                        <span className="font-semibold text-sm text-white">{layer.zh}</span>
                        <span className="text-xs text-white/30">{layer.en}</span>
                      </div>
                      <div className="text-xs text-white/40 truncate">{layer.desc}</div>
                    </div>
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: layer.color }} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 右侧 - 详情展示 */}
          <div className="lg:sticky lg:top-24">
            <div
              key={activeLayer}
              className="p-8 bg-[#0A1020] clip-card-lg border transition-all duration-500"
              style={{ borderColor: active.color + "40" }}
            >
              {/* 层级标识 */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 flex items-center justify-center clip-card"
                  style={{ background: active.color + "20" }}
                >
                  {(() => {
                    const Icon = active.icon;
                    return <Icon className="w-6 h-6" style={{ color: active.color }} />;
                  })()}
                </div>
                <div>
                  <div className="font-mono text-xs mb-0.5" style={{ color: active.color + "80" }}>
                    LAYER_{active.num}
                  </div>
                  <h3 className="font-['Sora'] font-bold text-xl text-white">
                    {active.zh}
                    <span className="text-sm font-normal text-white/30 ml-2">/ {active.en}</span>
                  </h3>
                </div>
              </div>

              {/* 功能描述 */}
              <p className="text-white/60 mb-6 leading-relaxed">{active.desc}</p>

              {/* 详细功能列表 */}
              <div className="space-y-3">
                {active.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 flex-shrink-0 flex items-center justify-center clip-card-sm mt-0.5"
                      style={{ background: active.color + "20" }}
                    >
                      <span className="text-xs font-mono" style={{ color: active.color }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>

              {/* 底部装饰线 */}
              <div
                className="mt-8 h-px"
                style={{
                  background: `linear-gradient(90deg, ${active.color}60, transparent)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
