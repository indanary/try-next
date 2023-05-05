import Image from "next/image"

interface PetsPageProps {}

const PetsPage: React.FC<PetsPageProps> = ({}) => {
	return (
		<div>
			{["1", "2", "3", "4", "5"].map((path: any) => (
				<div key={path}>
					<Image
						src={`/${path}.jpeg`}
						alt="pet"
						width={"280"}
						height={"420"}
					/>
				</div>
			))}
		</div>
	)
}

export default PetsPage
