import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Zap,
  TrendingUp,
  Activity,
  Filter,
  Download,
} from "lucide-react";
import { useState } from "react";

interface Incident {
  id: string;
  type: "accident" | "wrong-way" | "breakdown" | "pedestrian" | "lane-violation";
  severity: "critical" | "high" | "medium" | "low";
  location: string;
  camera: string;
  timestamp: string;
  description: string;
  status: "active" | "resolved";
}

const mockIncidents: Incident[] = [
  {
    id: "INC001",
    type: "accident",
    severity: "critical",
    location: "Highway 101, Mile Marker 42",
    camera: "CAM-101-42",
    timestamp: "2 minutes ago",
    description: "Multi-vehicle collision detected",
    status: "active",
  },
  {
    id: "INC002",
    type: "wrong-way",
    severity: "high",
    location: "Interstate 280, Exit 35B",
    camera: "CAM-280-35B",
    timestamp: "8 minutes ago",
    description: "Vehicle traveling northbound in southbound lane",
    status: "active",
  },
  {
    id: "INC003",
    type: "pedestrian",
    severity: "high",
    location: "Downtown Street, 5th & Main",
    camera: "CAM-DT-05M",
    timestamp: "15 minutes ago",
    description: "Pedestrian on elevated highway",
    status: "resolved",
  },
  {
    id: "INC004",
    type: "breakdown",
    severity: "medium",
    location: "Highway 101, Mile Marker 38",
    camera: "CAM-101-38",
    timestamp: "22 minutes ago",
    description: "Vehicle stopped in travel lane",
    status: "resolved",
  },
  {
    id: "INC005",
    type: "lane-violation",
    severity: "medium",
    location: "Route 9, Mile Marker 15",
    camera: "CAM-9-15",
    timestamp: "35 minutes ago",
    description: "Illegal lane change pattern detected",
    status: "resolved",
  },
];

const incidentTypeConfig: Record<
  string,
  { label: string; color: string; icon: any }
> = {
  accident: { label: "Accident", color: "text-red-600", icon: AlertCircle },
  "wrong-way": {
    label: "Wrong-Way Driving",
    color: "text-orange-600",
    icon: TrendingUp,
  },
  breakdown: {
    label: "Vehicle Breakdown",
    color: "text-yellow-600",
    icon: Activity,
  },
  pedestrian: { label: "Pedestrian", color: "text-blue-600", icon: AlertCircle },
  "lane-violation": {
    label: "Lane Violation",
    color: "text-purple-600",
    icon: AlertCircle,
  },
};

const severityConfig: Record<string, { label: string; bg: string; text: string }> = {
  critical: { label: "Critical", bg: "bg-red-100", text: "text-red-700" },
  high: { label: "High", bg: "bg-orange-100", text: "text-orange-700" },
  medium: { label: "Medium", bg: "bg-yellow-100", text: "text-yellow-700" },
  low: { label: "Low", bg: "bg-blue-100", text: "text-blue-700" },
};

export default function IncidentsDashboard() {
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "resolved">("all");

  const filteredIncidents = mockIncidents.filter(
    (incident) => filterStatus === "all" || incident.status === filterStatus
  );

  const activeIncidents = mockIncidents.filter((i) => i.status === "active");
  const resolvedCount = mockIncidents.filter((i) => i.status === "resolved").length;
  const avgResponseTime = 2.4;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Incidents Dashboard
              </h1>
              <p className="text-sm text-slate-600">Real-time traffic monitoring</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">
                  Active Incidents
                </p>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                  {activeIncidents.length}
                </p>
              </div>
              <AlertCircle className="w-12 h-12 text-red-500/20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Resolved Today</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                  {resolvedCount}
                </p>
              </div>
              <Activity className="w-12 h-12 text-green-500/20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">
                  Avg Response Time
                </p>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                  {avgResponseTime}s
                </p>
              </div>
              <Zap className="w-12 h-12 text-blue-500/20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">
                  Detection Accuracy
                </p>
                <p className="text-3xl font-bold text-slate-900 mt-2">99.2%</p>
              </div>
              <TrendingUp className="w-12 h-12 text-primary/20" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Incidents List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-slate-200">
              {/* Controls */}
              <div className="border-b border-slate-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-slate-400" />
                  <select
                    value={filterStatus}
                    onChange={(e) =>
                      setFilterStatus(e.target.value as "all" | "active" | "resolved")
                    }
                    className="text-sm px-3 py-1 rounded border border-slate-200 bg-white cursor-pointer"
                  >
                    <option value="all">All Incidents</option>
                    <option value="active">Active Only</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
                <span className="text-xs text-slate-500">
                  {filteredIncidents.length} results
                </span>
              </div>

              {/* Incidents */}
              <div className="divide-y divide-slate-200">
                {filteredIncidents.map((incident) => {
                  const config = incidentTypeConfig[incident.type];
                  const severity = severityConfig[incident.severity];
                  return (
                    <button
                      key={incident.id}
                      onClick={() => setSelectedIncident(incident)}
                      className={`w-full p-4 hover:bg-slate-50 transition text-left border-l-4 ${
                        incident.severity === "critical"
                          ? "border-red-500"
                          : incident.severity === "high"
                            ? "border-orange-500"
                            : incident.severity === "medium"
                              ? "border-yellow-500"
                              : "border-blue-500"
                      } ${
                        selectedIncident?.id === incident.id
                          ? "bg-primary/5"
                          : ""
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <config.icon className={`w-5 h-5 ${config.color}`} />
                          <div>
                            <p className="font-semibold text-slate-900">
                              {config.label}
                            </p>
                            <p className="text-xs text-slate-500">
                              {incident.id}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${severity.bg} ${severity.text}`}
                        >
                          {severity.label}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 mb-2">
                        {incident.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {incident.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {incident.timestamp}
                        </div>
                      </div>

                      {incident.status === "active" && (
                        <div className="mt-2 pt-2 border-t border-slate-200">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600">
                            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                            Active - Emergency Services Notified
                          </span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div>
            {selectedIncident ? (
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <div
                  className={`h-2 ${
                    selectedIncident.severity === "critical"
                      ? "bg-red-500"
                      : selectedIncident.severity === "high"
                        ? "bg-orange-500"
                        : selectedIncident.severity === "medium"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                  }`}
                ></div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Incident Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Incident ID
                      </p>
                      <p className="text-sm text-slate-900 font-mono bg-slate-50 p-2 rounded">
                        {selectedIncident.id}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Type
                      </p>
                      <p className="text-sm text-slate-900">
                        {incidentTypeConfig[selectedIncident.type].label}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Severity
                      </p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          severityConfig[selectedIncident.severity].bg
                        } ${severityConfig[selectedIncident.severity].text}`}
                      >
                        {severityConfig[selectedIncident.severity].label}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Location
                      </p>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-slate-900">
                          {selectedIncident.location}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Camera
                      </p>
                      <p className="text-sm text-slate-900 font-mono bg-slate-50 p-2 rounded">
                        {selectedIncident.camera}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Detected
                      </p>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-600" />
                        <p className="text-sm text-slate-900">
                          {selectedIncident.timestamp}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Status
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            selectedIncident.status === "active"
                              ? "bg-red-500 animate-pulse"
                              : "bg-green-500"
                          }`}
                        ></span>
                        <p className="text-sm text-slate-900 capitalize">
                          {selectedIncident.status}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                        Description
                      </p>
                      <p className="text-sm text-slate-600">
                        {selectedIncident.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    {selectedIncident.status === "active" && (
                      <>
                        <Button
                          className="w-full"
                          size="sm"
                          variant="outline"
                        >
                          View Camera Feed
                        </Button>
                        <Button
                          className="w-full"
                          size="sm"
                          variant="outline"
                        >
                          Contact Responders
                        </Button>
                      </>
                    )}
                    <Button
                      className="w-full"
                      size="sm"
                      variant="outline"
                    >
                      View Full Report
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-slate-200 p-8 text-center">
                <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600">
                  Select an incident to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
