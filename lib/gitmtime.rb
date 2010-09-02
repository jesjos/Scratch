def gitmtime
    filepath=@item.path.sub('/Scratch/','content/html/').sub(/\/$/,'')
    ext=%{.#{@item[:extension]}}
    filepath<<=ext
    if not FileTest.exists?(filepath)
        filepath.sub!(ext,%{/index#{ext}})
    end
    str=`git log -1 --format='%ci' -- #{filepath}`
    puts '###'
    puts filepath
    puts str
    puts '###'
    if str.nil? or str.empty?
        if @item.mtime.nil?
            return Time.now
        else
            return @item.mtime
        end
    else
        return DateTime.parse( str )
    end
end
