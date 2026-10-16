const RepoCard = ({name, description, language, commits}) => {
    return(
       <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{name}</h3>
          </div>
          <p className="mt-2 text-xl">{description}</p>//My personal page built with React.
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              {language}
            </span>//
            <span>{commits}</span>
          </div>
        </div>
       );
};

export default RepoCard;