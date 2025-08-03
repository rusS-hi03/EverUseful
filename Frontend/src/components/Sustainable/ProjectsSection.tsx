
import { ChevronRight, ChevronLeft, Eye, Users, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Clean Water Access",
    description: "Revolutionary water purification and distribution systems for underserved communities worldwide.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
    category: "Water Solutions",
    impact: "50M+ people served",
    communities: "Rural & Urban",
    status: "Active Projects",
    openPositions: "12 Research Roles",
    fundingGoal: "$2.5M raised"
  },
  {
    id: 2,
    title: "Renewable Energy Hubs",
    description: "Community-centered solar, wind, and hybrid energy solutions for sustainable power generation.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
    category: "Energy Solutions",
    impact: "75% emission reduction",
    communities: "Remote & Developing",
    status: "Seeking Collaborators",
    openPositions: "8 Engineering Roles",
    fundingGoal: "$1.8M target"
  },
  {
    id: 3,
    title: "Smart Agriculture",
    description: "AI-powered sustainable farming techniques and crop management systems for food security.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
    category: "Food Security",
    impact: "40% yield increase",
    communities: "Agricultural & Coastal",
    status: "Pilot Phase",
    openPositions: "15 Field Researchers",
    fundingGoal: "$3.2M funded"
  },
  {
    id: 4,
    title: "Waste Management",
    description: "Circular economy solutions for waste reduction and resource recovery in urban areas.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
    category: "Circular Economy",
    impact: "90% waste reduction",
    communities: "Urban & Industrial",
    status: "Implementation Ready",
    openPositions: "6 Policy Experts",
    fundingGoal: "$4.1M secured"
  },
  {
    id: 5,
    title: "Carbon Capture",
    description: "Innovative technologies for capturing and utilizing atmospheric carbon dioxide.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    category: "Climate Tech",
    impact: "1M+ tons CO2 captured",
    communities: "Industrial & Research",
    status: "R&D Phase",
    openPositions: "20 Scientists",
    fundingGoal: "$5.5M needed"
  },
  {
    id: 6,
    title: "Biodiversity Conservation",
    description: "Ecosystem restoration and wildlife conservation through community-based initiatives.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    category: "Conservation",
    impact: "10K+ species protected",
    communities: "Forest & Marine",
    status: "Global Expansion",
    openPositions: "10 Field Biologists",
    fundingGoal: "$2.8M raised"
  }
];

export const ProjectsSection = () => {
  const [watchlist, setWatchlist] = useState<number[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const toggleWatchlist = (projectId: number) => {
    setWatchlist(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-8 bg-gradient-to-br from-stone-50 via-yellow-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              SOLUTION CATEGORIES
            </p>
            <h2 className="text-5xl font-bold text-gray-900">Sustainable Project Types</h2>
          </div>
          
          <div className="max-w-md">
            <p className="text-lg text-gray-600 mb-6">
              Explore active research opportunities and join collaborative projects making real-world impact. Connect with experts and contribute to meaningful solutions.
            </p>
          </div>
        </div>
        
        {/* Sliding Projects Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          )}
          
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          )}
          
          {/* Projects Slider */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-80 group cursor-pointer">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-600 border border-emerald-200">
                        {project.status}
                      </span>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                        {project.category}
                      </span>
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3 text-center group-hover:bg-emerald-50 transition-colors">
                        <Target className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-gray-900">{project.impact}</p>
                        <p className="text-xs text-gray-500">Impact Achieved</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center group-hover:bg-blue-50 transition-colors">
                        <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-gray-900">{project.openPositions}</p>
                        <p className="text-xs text-gray-500">Open Positions</p>
                      </div>
                    </div>
                    
                    {/* Hover Action Buttons */}
                    <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs h-8"
                        onClick={() => toggleWatchlist(project.id)}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        {watchlist.includes(project.id) ? "Watching" : "Watch Project"}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 text-xs h-8"
                      >
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                    </div>
                    
                    {/* Funding Status - Always Visible */}
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Funding:</span>
                        <span className="text-xs font-semibold text-gray-900">{project.fundingGoal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join a Research Team?</h3>
          <p className="text-gray-600 mb-6">Connect with professors and students worldwide working on sustainable solutions</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full">
              Browse All Projects
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full">
              Submit Your Proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};