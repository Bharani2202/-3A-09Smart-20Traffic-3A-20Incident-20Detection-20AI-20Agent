import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  TrendingUp,
  Zap,
  Shield,
  Video,
  Clock,
  BarChart3,
  MapPin,
  Bell,
  Activity,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">TrafficAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">
              Features
            </a>
            <a href="#capabilities" className="text-slate-600 hover:text-slate-900 transition">
              Capabilities
            </a>
            <a href="#stats" className="text-slate-600 hover:text-slate-900 transition">
              Impact
            </a>
          </nav>
          <Button asChild>
            <Link to="/incidents">Open Dashboard</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4" />
              AI-Powered Traffic Intelligence
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Smart Traffic Incident <span className="text-primary">Detection</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Harness the power of AI and computer vision to detect traffic incidents in
            real-time. Reduce emergency response times, improve road safety, and enable
            smarter traffic management across your city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/incidents">View Live Dashboard</Link>
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-3xl"></div>
            <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  <span className="font-semibold">Camera Feed Analysis</span>
                </div>
                <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                  <Activity className="w-3 h-3" />
                  Live
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-slate-700/50 rounded p-4 text-center">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <div className="text-slate-300">Real-time</div>
                </div>
                <div className="bg-slate-700/50 rounded p-4 text-center">
                  <div className="text-2xl font-bold mb-2">&lt;1s</div>
                  <div className="text-slate-300">Detection</div>
                </div>
                <div className="bg-slate-700/50 rounded p-4 text-center">
                  <div className="text-2xl font-bold mb-2">99%</div>
                  <div className="text-slate-300">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Incident Detection System</h2>
            <p className="text-lg text-slate-600">
              Comprehensive detection capabilities powered by advanced computer vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: AlertCircle,
                title: "Accident Detection",
                description:
                  "Instantly identify vehicle collisions and road accidents with spatial analysis",
              },
              {
                icon: TrendingUp,
                title: "Wrong-Way Driving",
                description:
                  "Detect vehicles traveling in wrong directions with real-time trajectory analysis",
              },
              {
                icon: Clock,
                title: "Vehicle Breakdown Detection",
                description:
                  "Monitor sudden vehicle stoppages and breakdowns on roadways",
              },
              {
                icon: MapPin,
                title: "Lane Violation Detection",
                description:
                  "Track illegal turns and lane violations with precision positioning",
              },
              {
                icon: Shield,
                title: "Pedestrian & Animal Detection",
                description:
                  "Identify pedestrians and animals on highways for safety alerts",
              },
              {
                icon: Zap,
                title: "Instant Alert System",
                description:
                  "Generate alerts with timestamp, camera ID, location, and incident type",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200 hover:border-primary hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Capabilities</h2>
            <p className="text-lg text-slate-600">
              Enterprise-grade features for modern traffic management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: "Live Video Stream Analysis",
                points: [
                  "Multi-camera support",
                  "Real-time processing",
                  "Continuous monitoring",
                ],
              },
              {
                icon: TrendingUp,
                title: "Vehicle Tracking",
                points: [
                  "Pattern recognition",
                  "Trajectory analysis",
                  "Behavior classification",
                ],
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                points: [
                  "Traffic control centers",
                  "Emergency services",
                  "Customizable rules",
                ],
              },
            ].map((capability, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {capability.title}
                </h3>
                <ul className="space-y-3">
                  {capability.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Real-Time Impact</h2>
            <p className="text-lg text-slate-600">
              Proven results in traffic safety and incident response
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Detection Speed", value: "&lt;1s", icon: Zap },
              { label: "System Uptime", value: "99.9%", icon: Shield },
              { label: "False Alarms", value: "&lt;1%", icon: BarChart3 },
              { label: "Response Time", value: "-68%", icon: Clock },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-slate-900 mb-2" dangerouslySetInnerHTML={{ __html: stat.value }} />
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">
              Four-stage intelligent incident detection and response system
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Capture",
                description: "Multi-camera video feeds continuously stream to the system",
              },
              {
                num: "02",
                title: "Analyze",
                description: "AI models analyze frames for anomalies and dangerous patterns",
              },
              {
                num: "03",
                title: "Detect",
                description:
                  "Incidents are classified by type and severity in real-time",
              },
              {
                num: "04",
                title: "Alert",
                description:
                  "Instant notifications sent to authorities and emergency services",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-1 bg-primary/20"></div>
                )}
                <div className="relative z-10 bg-white rounded-xl p-8 border border-slate-200 text-center">
                  <div className="text-5xl font-bold text-primary/20 mb-2">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Deploy?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join cities worldwide using AI-powered traffic management to save lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/incidents">Access Live Dashboard</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">TrafficAI</span>
              </div>
              <p className="text-sm">
                Intelligent traffic management powered by AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-white transition">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#stats" className="hover:text-white transition">
                    Impact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-sm text-center">
            <p>&copy; 2024 TrafficAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
