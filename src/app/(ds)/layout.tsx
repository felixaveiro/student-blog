



export default function RSLayout ({
    children,
} : {
    children: React.ReactNode
}) {
    return (
     <div>
        <div className="px-4 py-2">
         {children}
        </div>
     </div>
    )
}
