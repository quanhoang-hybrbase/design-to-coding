'use client'

import { Button } from '@/components/ui/button'
import { FeatureSection } from '@/components/core/feature-section'
import { SectionTitle } from '@/components/core/section-title'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function DemoByAiPage() {
	// Services section data
	const servicesData = {
		title: {
			tagline: 'OUR SERVICES',
			heading: 'Transforming businesses with innovative solutions',
			description: 'We offer a comprehensive range of services to help your business thrive in the digital landscape. Our expert team delivers tailored solutions to meet your unique needs.',
			alignment: 'center',
			length: 'medium'
		},
		features: [
			{
				imageSrc: '/assets/placholder-image.png',
				imageAlt: 'Web Development',
				heading: 'Web Development',
				description: 'We create responsive, user-friendly websites that drive conversions and enhance your online presence. Our development team uses cutting-edge technologies to deliver exceptional results.',
				buttons: [
					{
						label: 'Get Started',
						variant: 'default'
					},
					{
						label: 'Learn more',
						variant: 'link'
					}
				]
			},
			{
				imageSrc: '/assets/placholder-image.png',
				imageAlt: 'Digital Marketing',
				heading: 'Digital Marketing',
				description: 'Boost your online visibility with our comprehensive digital marketing services. We develop strategies that increase traffic, generate leads, and maximize your ROI.',
				buttons: [
					{
						label: 'Get Started',
						variant: 'default'
					},
					{
						label: 'Learn more',
						variant: 'link'
					}
				]
			},
			{
				imageSrc: '/assets/placholder-image.png',
				imageAlt: 'Brand Strategy',
				heading: 'Brand Strategy',
				description: 'Build a strong brand identity that resonates with your target audience. Our strategic approach helps you differentiate your business and create lasting connections with customers.',
				buttons: [
					{
						label: 'Get Started',
						variant: 'default'
					},
					{
						label: 'Learn more',
						variant: 'link'
					}
				]
			}
		]
	}

	// Testimonials data
	const testimonialsData = {
		title: {
			tagline: 'TESTIMONIALS',
			heading: 'What our clients say',
			description: '',
			alignment: 'center',
			length: 'medium'
		},
		features: [
			{
				imageSrc: '/assets/placholder-image.png',
				imageAlt: 'Client 1',
				heading: 'Sarah Johnson',
				description: '"The team delivered exceptional results for our website redesign. Their attention to detail and creative approach exceeded our expectations. Highly recommended!"',
				buttons: [
					{
						label: 'View Case Study',
						variant: 'link',
						icon: <ChevronRight className="h-4 w-4" />
					}
				]
			},
			{
				imageSrc: '/assets/placholder-image.png',
				imageAlt: 'Client 2',
				heading: 'Michael Chen',
				description: '"Their digital marketing strategy transformed our online presence. We saw a 200% increase in leads within the first three months. An outstanding agency to work with."',
				buttons: [
					{
						label: 'View Case Study',
						variant: 'link',
						icon: <ChevronRight className="h-4 w-4" />
					}
				]
			},
			{
				imageSrc: '/assets/placholder-image.png',
				imageAlt: 'Client 3',
				heading: 'Emma Rodriguez',
				description: '"The brand strategy they developed perfectly captured our company vision. Their collaborative approach made the entire process smooth and effective."',
				buttons: [
					{
						label: 'View Case Study',
						variant: 'link',
						icon: <ChevronRight className="h-4 w-4" />
					}
				]
			}
		]
	}

	// Process section data
	const processData = {
		title: {
			tagline: 'OUR PROCESS',
			heading: 'How we deliver results',
			description: '',
			alignment: 'left',
			length: 'medium'
		},
		features: [
			{
				iconSrc: '/assets/icon-placeholder.svg',
				heading: 'Discovery',
				description: 'We begin by understanding your business goals, target audience, and current challenges to develop a tailored strategy.',
				buttons: [
					{
						label: 'Learn More',
						variant: 'outline'
					},
					{
						label: 'See Examples',
						variant: 'link',
						icon: <ChevronRight className="h-4 w-4" />
					}
				]
			},
			{
				iconSrc: '/assets/icon-placeholder.svg',
				heading: 'Strategy',
				description: 'Our team creates a comprehensive plan that outlines the approach, timeline, and expected outcomes for your project.',
				buttons: [
					{
						label: 'Learn More',
						variant: 'outline'
					},
					{
						label: 'See Examples',
						variant: 'link',
						icon: <ChevronRight className="h-4 w-4" />
					}
				]
			},
			{
				iconSrc: '/assets/icon-placeholder.svg',
				heading: 'Implementation',
				description: 'We execute the strategy with precision, keeping you informed throughout the process and making adjustments as needed.',
				buttons: [
					{
						label: 'Learn More',
						variant: 'outline'
					},
					{
						label: 'See Examples',
						variant: 'link',
						icon: <ChevronRight className="h-4 w-4" />
					}
				]
			}
		]
	}

	return (
		<main className="flex flex-col">
			{/* Hero Section */}
			<section className="relative bg-bg-weak-50 min-h-[calc(100vh-76px)] flex items-center">
				<div className="absolute inset-0 z-0 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-bg-strong-950/80 to-bg-strong-950/40 z-10" />
					<Image 
						src="/assets/placholder-image.png"
						alt="Agency Hero"
						fill
						className="object-cover"
						priority
					/>
				</div>
				<div className="container mx-auto px-5 md:px-16 relative z-20 py-16 md:py-28">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-7xl font-bold text-text-weak-50 mb-6">
							Innovative Solutions for Digital Growth
						</h1>
						<p className="text-lg md:text-xl text-text-weak-50/90 mb-8">
							We help businesses transform their digital presence with cutting-edge strategies and creative solutions that drive results.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="w-full sm:w-auto">
								Get Started
							</Button>
							<Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-text-weak-50 border-text-weak-50 hover:bg-text-weak-50/10">
								Our Services
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-16 md:py-28">
				<FeatureSection
					title={servicesData.title}
					features={servicesData.features}
					variant="v1"
				/>
			</section>

			{/* About Us Section */}
			<section className="py-16 md:py-28 bg-bg-weak-50">
				<div className="container mx-auto px-5 md:px-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
						<div className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden">
							<Image 
								src="/assets/placholder-image.png"
								alt="About our agency"
								fill
								className="object-cover"
							/>
						</div>
						<div>
							<SectionTitle
								tagline="ABOUT US"
								heading="A creative agency with a passion for innovation"
								description="Founded in 2010, our agency has been at the forefront of digital transformation, helping businesses of all sizes achieve their goals through innovative solutions and strategic thinking."
								alignment="left"
								length="medium"
							/>
							<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div>
									<h3 className="text-2xl font-semibold text-text-strong-950 mb-2">15+</h3>
									<p className="text-text-sub-600">Years of Experience</p>
								</div>
								<div>
									<h3 className="text-2xl font-semibold text-text-strong-950 mb-2">200+</h3>
									<p className="text-text-sub-600">Projects Completed</p>
								</div>
								<div>
									<h3 className="text-2xl font-semibold text-text-strong-950 mb-2">50+</h3>
									<p className="text-text-sub-600">Team Members</p>
								</div>
								<div>
									<h3 className="text-2xl font-semibold text-text-strong-950 mb-2">98%</h3>
									<p className="text-text-sub-600">Client Satisfaction</p>
								</div>
							</div>
							<div className="mt-8">
								<Button>Learn More About Us</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-16 md:py-28">
				<FeatureSection
					title={processData.title}
					features={processData.features}
					variant="v3"
				/>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 md:py-28 bg-bg-weak-50">
				<FeatureSection
					title={testimonialsData.title}
					features={testimonialsData.features}
					variant="v2"
				/>
			</section>

			{/* Contact Section */}
			<section className="py-16 md:py-28 bg-bg-strong-950 text-text-weak-50">
				<div className="container mx-auto px-5 md:px-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
						<div>
							<SectionTitle
								tagline="CONTACT US"
								heading="Let's start a conversation"
								description="Ready to transform your digital presence? Get in touch with our team to discuss how we can help your business grow."
								alignment="left"
								length="medium"
								className="text-text-weak-50"
							/>
							<div className="mt-8 space-y-6">
								<div>
									<h3 className="text-xl font-semibold mb-2">Email</h3>
									<p className="text-text-weak-50/80">info@youragency.com</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">Phone</h3>
									<p className="text-text-weak-50/80">+1 (555) 123-4567</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">Address</h3>
									<p className="text-text-weak-50/80">123 Innovation Street<br />San Francisco, CA 94103</p>
								</div>
							</div>
						</div>
						<div className="bg-bg-strong-900 p-8 rounded-3xl">
							<h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
							<form className="space-y-6">
								<div className="space-y-2">
									<label htmlFor="name" className="block text-sm font-medium">Name</label>
									<input 
										type="text" 
										id="name" 
										className="w-full p-3 bg-bg-strong-950 border border-bg-strong-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
										placeholder="Your name"
									/>
								</div>
								<div className="space-y-2">
									<label htmlFor="email" className="block text-sm font-medium">Email</label>
									<input 
										type="email" 
										id="email" 
										className="w-full p-3 bg-bg-strong-950 border border-bg-strong-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
										placeholder="your@email.com"
									/>
								</div>
								<div className="space-y-2">
									<label htmlFor="message" className="block text-sm font-medium">Message</label>
									<textarea 
										id="message" 
										rows={4} 
										className="w-full p-3 bg-bg-strong-950 border border-bg-strong-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
										placeholder="How can we help you?"
									/>
								</div>
								<Button className="w-full">Send Message</Button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 bg-bg-strong-950 text-text-weak-50 border-t border-bg-strong-900">
				<div className="container mx-auto px-5 md:px-16">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-4 md:mb-0">
							<h2 className="text-2xl font-bold">Agency</h2>
						</div>
						<div className="flex space-x-6">
							<a href="#" className="hover:text-primary transition-colors">Home</a>
							<a href="#" className="hover:text-primary transition-colors">Services</a>
							<a href="#" className="hover:text-primary transition-colors">About</a>
							<a href="#" className="hover:text-primary transition-colors">Contact</a>
						</div>
					</div>
					<div className="mt-8 pt-8 border-t border-bg-strong-900 text-center md:text-left text-text-weak-50/60">
						<p>© {new Date().getFullYear()} Agency. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</main>
	)
}
