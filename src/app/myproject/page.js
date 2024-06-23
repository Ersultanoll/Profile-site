import { Tabs,TabsList,TabsTrigger } from '@/components/ui/tabs';


function MyProject() {
	return (
		<div className='container min-h-screen py-12'>
			<h2 className='section-title'>My Project</h2>
			<Tabs defaultValue='all' className='max-w-[620px] mx-auto'>
				<TabsList className='grid mt-5 xl:grid-cols-4'>
					<TabsTrigger value='all'>All Product</TabsTrigger>
					<TabsTrigger value='react'>React js</TabsTrigger>
					<TabsTrigger value='next'>Next js</TabsTrigger>
					<TabsTrigger value='fullstack'>Fullstack</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
}

export default MyProject;
