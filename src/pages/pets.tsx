import Image from "next/image"
import img from "../../public/1.jpeg"

interface PetsPageProps {}

const PetsPage: React.FC<PetsPageProps> = ({}) => {
	return (
		<div>
      <Image
        src={img}
        placeholder="blur"
        alt="pet"
        width={"280"}
        height={"420"}
      />
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
