/**
 * Footer - 页脚与联系我们
 * Design: 赛博朋克企业感 - 深色底 + 霓虹边框
 */
import { Zap, Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#060A10] border-t border-[#0EA5E9]/20">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#0EA5E9]/60 to-transparent" />

      {/* CTA 区域 */}
      <div className="container py-20">
        <div className="text-center mb-16">
          <div className="number-tag mb-4 text-center">GET_STARTED</div>
          <h2 className="font-['Sora'] font-extrabold text-3xl lg:text-5xl text-white mb-6">
            准备好部署您的<br />
            <span className="gradient-text">数字职工</span>了吗？
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            私有化部署，数据不出域。最快 3 天完成部署上线，提供全程实施陪跑服务。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group flex items-center gap-2 px-8 py-4 bg-[#0EA5E9] text-[#080C14] font-bold text-lg clip-card hover:bg-[#38bdf8] transition-all duration-300 glow-blue">
              申请免费演示
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 border border-[#0EA5E9]/40 text-[#0EA5E9] font-bold text-lg clip-card hover:bg-[#0EA5E9]/10 transition-all duration-300">
              下载产品白皮书
            </button>
          </div>
        </div>

        {/* 联系信息 & 链接 */}
        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          {/* 品牌信息 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0EA5E9]/20 clip-card-sm" />
                <Zap className="w-4 h-4 text-[#0EA5E9] relative z-10" />
              </div>
              <span className="font-['Sora'] font-bold text-lg text-white">
                数字<span className="text-[#0EA5E9]">职工</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              企业级私有化部署的全能 AI 智能体。可控优先，主动执行，让 AI 真正成为企业的超级员工。
            </p>
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="text-xs font-mono text-[#22c55e]">系统运行正常</span>
            </div>
          </div>

          {/* 产品链接 */}
          <div className="space-y-4">
            <h4 className="font-['Sora'] font-semibold text-white text-sm">产品文档</h4>
            <div className="space-y-2.5">
              {[
                "快速开始指南",
                "私有化部署文档",
                "API 开发者文档",
                "安全白皮书",
                "更新日志",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm text-white/40 hover:text-[#0EA5E9] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* 联系方式 */}
          <div className="space-y-4">
            <h4 className="font-['Sora'] font-semibold text-white text-sm">联系我们</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/40">
                <Mail className="w-4 h-4 text-[#0EA5E9]/60 flex-shrink-0" />
                enterprise@digital-worker.ai
              </div>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <Phone className="w-4 h-4 text-[#0EA5E9]/60 flex-shrink-0" />
                400-XXX-XXXX
              </div>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <MapPin className="w-4 h-4 text-[#0EA5E9]/60 flex-shrink-0" />
                北京 · 上海 · 深圳
              </div>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <Github className="w-4 h-4 text-[#0EA5E9]/60 flex-shrink-0" />
                github.com/digital-worker
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/25 font-mono">
            © 2026 数字职工 Digital Worker. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-white/25">
            <a href="#" className="hover:text-[#0EA5E9] transition-colors">隐私政策</a>
            <a href="#" className="hover:text-[#0EA5E9] transition-colors">服务条款</a>
            <a href="#" className="hover:text-[#0EA5E9] transition-colors">安全声明</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
