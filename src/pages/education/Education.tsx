import Timeline from '../../components/timeline/Timeline';

const Education = () => {
    const experienceData = [
        {
            timeYear: "2018 - 2021",
            purpose: "MCA",
            orgnizationName: "FIEM",
            isActive: false,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
        },
        {
            timeYear: "2015 - 2018",
            purpose: "BCA",
            orgnizationName: "FIEM",
            isActive: false,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
        }
    ]
    return (
        <Timeline data={experienceData} isLoading={false} />
    )
}

export default Education;