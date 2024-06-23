import Social from "./Social"

function Footer() {
  return (
		<div className='text-center bg-foreground h-[200px]'>
			<div className="pt-10 flex items-center flex-col gap-4">
				<Social classStyle="text-white"/>
        <p className="subtitle">
          Copyright @ Ryan Davis. All.rights reserved
        </p>
			</div>
		</div>
  );
}

export default Footer