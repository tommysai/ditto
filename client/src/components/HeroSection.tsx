/**
 * HeroSection - 数字职工首屏
 * Design: 赛博朋克企业感 - 粒子背景 + 切角布局 + 霓虹文字
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Shield, Cpu, Globe } from "lucide-react";

// 粒子画布组件
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ["#0EA5E9", "#06B6D4", "#7C3AED", "#0EA5E9"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 绘制连线
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      // 绘制粒子
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

// 数字计数器
function CountUp({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        const startTime = Date.now();
        const tick = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, started]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #080C14 0%, #0A1020 50%, #080C14 100%)",
      }}
    >
      {/* 背景图 */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663323497882/8gmrqxNEbpPxG8xFVEgCCV/hero-bg-Qw4zKFThndA97ECroNR9Zf.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 粒子背景 */}
      <div className="absolute inset-0 opacity-60">
        <ParticleCanvas />
      </div>

      {/* 网格背景 */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* 扫描线 */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* 渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080C14] to-transparent" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            {/* 标签 */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 text-[#0EA5E9] text-xs font-mono clip-card-sm">
                <span className="status-dot" />
                ENTERPRISE AI AGENT v2.0
              </div>
              <div className="px-3 py-1.5 bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#a78bfa] text-xs font-mono clip-card-sm">
                私有化部署
              </div>
            </div>

            {/* 主标题 */}
            <div className="space-y-2">
              <h1 className="font-['Sora'] font-extrabold text-5xl lg:text-6xl xl:text-7xl leading-tight text-white">
                数字
                <span className="gradient-text">职工</span>
              </h1>
              <p className="font-['Sora'] font-semibold text-xl lg:text-2xl text-white/70 leading-relaxed">
                企业级全能 AI 智能体
              </p>
            </div>

            {/* 副标题 */}
            <p className="text-base lg:text-lg text-white/50 leading-relaxed max-w-lg">
              可控优先，主动执行。在确保企业数据绝对安全的前提下，充当企业的超级员工，实现从"工具"到"智能伙伴"的价值跃迁。
            </p>

            {/* 核心价值标签 */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, label: "私有化部署", color: "text-[#0EA5E9]" },
                { icon: Cpu, label: "自主执行", color: "text-[#06B6D4]" },
                { icon: Globe, label: "主动服务", color: "text-[#a78bfa]" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-sm text-white/70 clip-card-sm hover:border-[#0EA5E9]/40 hover:bg-[#0EA5E9]/5 transition-all duration-300"
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="group flex items-center gap-2 px-6 py-3 bg-[#0EA5E9] text-[#080C14] font-semibold clip-card hover:bg-[#38bdf8] transition-all duration-300 glow-blue"
              >
                探索功能模块
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#comparison"
                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-[#0EA5E9]/40 text-[#0EA5E9] font-semibold clip-card hover:bg-[#0EA5E9]/10 transition-all duration-300"
              >
                竞品对比分析
              </a>
            </div>
          </div>

          {/* 右侧 - AI职工可视化 */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* 主图 */}
              <div className="relative clip-card-lg overflow-hidden neon-border">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663323497882/8gmrqxNEbpPxG8xFVEgCCV/ai-worker-abstract-WThDsH5xxqpLVb5AHaEgMY.webp"
                  alt="数字职工 AI 实体"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/60 via-transparent to-transparent" />
              </div>

              {/* 浮动数据卡片 */}
              <div className="absolute -left-8 top-1/4 bg-[#0A1020]/90 backdrop-blur-sm border border-[#0EA5E9]/30 p-3 clip-card-sm neon-border">
                <div className="number-tag mb-1">TASK_QUEUE</div>
                <div className="font-mono text-[#0EA5E9] font-bold text-lg">
                  <CountUp target={247} />
                </div>
                <div className="text-xs text-white/40">任务已完成</div>
              </div>

              <div className="absolute -right-4 bottom-1/3 bg-[#0A1020]/90 backdrop-blur-sm border border-[#06B6D4]/30 p-3 clip-card-sm neon-border-cyan">
                <div className="number-tag mb-1">ACCURACY</div>
                <div className="font-mono text-[#06B6D4] font-bold text-lg">
                  <CountUp target={99} suffix="%" />
                </div>
                <div className="text-xs text-white/40">执行准确率</div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部统计数据 */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "企业客户", value: 500, suffix: "+" },
            { label: "日均任务处理", value: 10, suffix: "万+" },
            { label: "安全认证", value: 5, suffix: "项" },
            { label: "部署成功率", value: 99, suffix: ".9%" },
          ].map(({ label, value, suffix }) => (
            <div key={label} className="text-center">
              <div className="font-['Sora'] font-extrabold text-3xl gradient-text">
                <CountUp target={value} suffix={suffix} />
              </div>
              <div className="text-sm text-white/40 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
