class Graph < Nanoc3::Filter
    identifier :graph
    @@tmpfic="/tmp/graphtemp.dot"
    def run(content, params={}) 
        content.gsub!(%r{<graph title="([^"]*)">(.+?)</graph>}m) do |full|
            FileUtils.rm(@@tmpfic)
            title=$1
            str=$2
            filename=title.gsub(/[^a-zA-Z0-9_]/,"_")
            File.open(@@tmpfic,'w') do |f|
            f.write %[ digraph Source {
                        fontsize=10;
                        rankdir="LR";
                        graph [truecolor bgcolor="#ffffff00"];
                        node [width=0, height=0, fontname="Optima Bold", shape="Mrecord", color="#000000", style="filled" fillcolor="#eeeeee", fontcolor="#333333"] ;
                        edge [arrowsize=.5, color="#333333"] ; ]
            f.write str
            f.write %[}]
            end
            FileUtils.mkdir_p('output'+@item.path+'graph')
            webpath=@item.path + 'graph/' + filename + '.png'
            path='output'+webpath
            puts  "dot -Tpng -o #{path} /tmp/graphtemp.dot"
            system("dot -Tpng -o #{path} /tmp/graphtemp.dot")
            puts %{<img alt="#{title}" src="#{webpath}"/>}
            %{<img alt="#{title}" src="#{webpath}"/>}
        end
        content
    end
end
