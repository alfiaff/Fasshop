const SkeletonCardDiscount = ({ height, bg }) => {
  return (
    <div className={`w-full ${height} ${bg} rounded-lg flex items-center justify-center`}>
      <h2 className="font-bold">Belum ada promo</h2>
    </div>
  )
}

export default SkeletonCardDiscount;