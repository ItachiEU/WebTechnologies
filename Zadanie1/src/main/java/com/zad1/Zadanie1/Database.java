package com.zad1.Zadanie1;

import javax.annotation.Resource;
import java.util.*;

import static java.lang.Math.min;

class Pair<Integer, String> implements Comparable<Pair> {
    public int l;
    public String r;
    public Pair(Integer l, String r){
        this.l = (int) l;
        this.r = r;
    }

    @Override
    public int compareTo(Pair b) {
        if(b.l == this.l)
            return this.r.toString().compareTo(b.r.toString());
        return b.l - this.l;
    }

    @Override
    public java.lang.String toString() {
        return "Pair{" +
                "l=" + l +
                ", r=" + r +
                '}';
    }
}

@Resource
public record Database() {
    static Map<String, Integer> nameCount = new HashMap<String, Integer>();

    public static Integer registerUser(String name){
        if(nameCount.get(name) == null)
            nameCount.put(name, 1);
        else
            nameCount.put(name, nameCount.get(name) + 1);
        return nameCount.get(name);
    }

    public static void deleteUser(String name){
        if(nameCount.get(name) != null)
            nameCount.remove(name);
    }

    public static Map<String, Integer> getTopUsers(int count){
        if(count == -1)
            count = nameCount.size();

        List<Pair<Integer, String>> list = new ArrayList<>();
        for(Map.Entry<String, Integer> entry: nameCount.entrySet())
            list.add(new Pair<>(entry.getValue(), entry.getKey()));

        Collections.sort(list);
        Map<String, Integer> resultMap = new LinkedHashMap<>();

        for(int i = 0; i < min(count, nameCount.size()); i++)
            resultMap.put(list.get(i).r, list.get(i).l);

        return resultMap;
    }

    public static Map<String, Integer> getUsersIgnoreCase(){
        Map<String, Integer> temporary = new HashMap<String, Integer>();
        List<Pair<Integer, String>> list = new ArrayList<>();

        for(Map.Entry<String, Integer> entry: nameCount.entrySet())
            temporary.merge(entry.getKey().toLowerCase(), entry.getValue(), Integer::sum);

        for(Map.Entry<String, Integer> entry: temporary.entrySet())
            list.add(new Pair<>(entry.getValue(), entry.getKey()));

        Collections.sort(list);
        Map<String, Integer> resultMap = new LinkedHashMap<>();

        for(int i = 0; i < temporary.size(); i++) {
            StringBuilder converted = new StringBuilder();
            String txt = list.get(i).r;
            for (int j = 0; j < txt.length(); j++) {
                if(j == 0)
                    converted.append(Character.toTitleCase(txt.charAt(j)));
                else
                    converted.append(txt.charAt(j));
            }
            resultMap.put(converted.toString(), list.get(i).l);
        }

        return resultMap;
    }

}